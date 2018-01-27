import React               from 'react';
import PropTypes           from 'prop-types';
import CalculatorContainer from './CalculatorContainer';
import { Container }       from './CalculatorStyle'
import Layout              from 'components/Layout/Layout';
import CalculationScreen   from 'components/CalculationScreen/CalculationScreen';
import CalculationControl  from 'components/CalculationControl/CalculationControl';
import {
  db,
  getDbState,
  dbSave
}                          from 'helpers/localDb';
import {
  isOperator,
  lastCharIsOperator,
  replaceOperator,
  getCalculationResult,
  removeLastChar,
  mustRemoveLastChar,
}                          from 'helpers/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    delayToReset: 750,
    operators: ['+', '-', '/', '*', 'x'],
    numbers: [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      ['.', '0', 'remove'],
    ],
  }

  async componentDidMount() {
    document.addEventListener('keydown', this.initKeyboardEvent);

    const dbState = await getDbState();
    return await dbSave(dbState, this.props.initDb);
  }

  initKeyboardEvent = (event) => {
    const { operators, numbers } = this.state;
    const isOperator = operators.includes(event.key);
    const isNumber = numbers.filter(row => row.includes(event.key)).length;

    if (isOperator || isNumber) {
      const operatorToDisplay = (event.key === '*') ? 'x' : '';

      this.handleCalculation(event.key, operatorToDisplay);
    }

    if (mustRemoveLastChar(event.key)) {
      this.resetCalculator();
      this.handleCalculation(event.key);
    }
  }

  getActionsToCheck = (selectedValue, operatorToDisplay, value) => {
    const { currentCalculation } = this.props;
    const { operators } = this.state;

    const notChangeCalculation = currentCalculation == '0' && value == '0';
    const mustReplaceOperator = isOperator(operators, selectedValue) && lastCharIsOperator(operators, currentCalculation);
    const mustAddOperator = isOperator(operators, selectedValue) || lastCharIsOperator(operators, currentCalculation);
    const mustSetValueToCalculation = currentCalculation == '0';

    const actions = {
      notChangeCalculation,
      mustReplaceOperator,
      mustAddOperator,
      mustSetValueToCalculation,
    };

    return actions;
  }

  setCalculation = (value, actionsToCheck) => {
    const { currentCalculation } = this.props;
    const {
      notChangeCalculation,
      mustReplaceOperator,
      mustAddOperator,
      mustSetValueToCalculation,
    } = actionsToCheck;

    let calculation;

    if (notChangeCalculation) {
      return calculation;
    } else if (mustReplaceOperator) {
      calculation = replaceOperator(currentCalculation, value);
    } else if (mustAddOperator) {
      if (value !== '.')
        calculation = `${currentCalculation} ${value}`;
      else
        calculation = `${currentCalculation} 0${value}`;
    } else if (mustSetValueToCalculation) {
      if (currentCalculation === '0' && value === '.')
        calculation = `${currentCalculation}${value}`;
      else
        calculation = value;
    } else {
      calculation = `${currentCalculation}${value}`;
    }

    return calculation;
  }

  getCalculationToExecute = (selectedValue, operatorToDisplay) => {
    const value = operatorToDisplay || selectedValue;
    const actionsToCheck = this.getActionsToCheck(selectedValue, operatorToDisplay, value);
    const calculation = this.setCalculation(value, actionsToCheck);

    return calculation;
  }

  handleCalculation = async (selectedValue, operatorToDisplay = '') => {
    if (mustRemoveLastChar(selectedValue)) {
      const { currentCalculation } = this.props;
      const { operators } = this.state;
      const resultAfterRemoveLastChar = removeLastChar(currentCalculation, operators);

      return await dbSave(resultAfterRemoveLastChar, this.props.updateResult);
    }

    const calculation = this.getCalculationToExecute(selectedValue, operatorToDisplay);
    const result = getCalculationResult(calculation);

    return await dbSave(result, this.props.updateResult);
  }

  resetCalculator = () => {
    const down = 1;
    const up = 2;

    let keyboardState = down;

    document.onmouseup = () => keyboardState = up;
    document.onkeyup = () => keyboardState = up;

    return setTimeout(async () => {
      if (keyboardState === down) {
        return await dbSave(null, this.props.reset);
      }
    }, this.state.delayToReset);
  }

  render() {
    return (
      <Layout>
        <Container>
          <div>
            <CalculationScreen
              currentCalculation={this.props.currentCalculation}
              result={this.props.result}
            />
            <CalculationControl
              handleCalculation={this.handleCalculation}
              resetCalculator={this.resetCalculator}
              numbers={this.state.numbers}
            />
          </div>
        </Container>
      </Layout>
    );
  }
}

export default CalculatorContainer(Calculator);
