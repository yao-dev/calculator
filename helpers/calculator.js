export const isOperator = (operatorsList, operator) => {
  return operatorsList.includes(operator);
};

export const lastCharIsOperator = (operatorsList, value) => {
  if (!value) return false;
  return isOperator(operatorsList, value.slice(-1).trim());
};

export const replaceOperator = (str, value) => {
  const updateCurrentCalculation = `${str.slice(0, -1).trim()} ${value}`;
  return updateCurrentCalculation;
};

export const getCalculationResult = (currentCalculation = '', nextCalculation = '') => {
  let result;

  if (!currentCalculation) return { currentCalculation: '0', result: 0 };

  try {
    currentCalculation = currentCalculation.replace(/\x/g, '*');
    result = eval(nextCalculation || currentCalculation);
    currentCalculation = currentCalculation.replace(/\*/g, 'x');

    return {
      currentCalculation,
      result,
    };
  } catch (e) {
    result = eval(getNextCalculation(currentCalculation));
    currentCalculation = currentCalculation.replace(/\*/g, 'x');

    return {
      currentCalculation,
      result,
    };
  }
};

export const getNextCalculation = (calculation) => calculation.slice(0, -1).trim();

export const removeLastChar = (currentCalculation, operators) => {
  let result;
  let calculation = currentCalculation;

  if (!calculation) return;

  calculation = calculation.slice(0, -1).trim();

  if (isOperator(operators, calculation.slice(-1))) {
    const nextCalculation = getNextCalculation(calculation);

    return getCalculationResult(calculation, nextCalculation);
  }

  return getCalculationResult(calculation);
}

export const mustRemoveLastChar = (selectedValue) => {
  if (selectedValue === 'Backspace' || selectedValue === 'remove') {
    return true;
  }

  return false;
};

export default {
  isOperator,
  lastCharIsOperator,
  replaceOperator,
  getCalculationResult,
  removeLastChar,
  mustRemoveLastChar
};
