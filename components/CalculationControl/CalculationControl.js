import PropTypes     from 'prop-types';
import { Container } from './CalculationControlStyle';
import NumberList    from 'components/NumberList/NumberList';
import OperatorList  from 'components/OperatorList/OperatorList';

const CalculationControl = ({ numbers, handleCalculation, resetCalculator }) => {
  return (
    <Container>
      <NumberList
        numbers={numbers}
        handleCalculation={handleCalculation}
        resetCalculator={resetCalculator}
      />
      <OperatorList handleCalculation={handleCalculation} />
    </Container>
  );
};

CalculationControl.propTypes = {
  numbers:           PropTypes.arrayOf(
                      PropTypes.arrayOf(PropTypes.string).isRequired,
                     ).isRequired,
  handleCalculation: PropTypes.func.isRequired,
  resetCalculator:   PropTypes.func.isRequired,
};

export default CalculationControl;
