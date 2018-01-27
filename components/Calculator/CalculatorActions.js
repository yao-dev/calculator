import {
  INIT_LOCAL_DB,
  UPDATE_RESULT,
  RESET,
} from './CalculatorReducer';

export const initDb = ({ currentCalculation, result }) => ({
  type: INIT_LOCAL_DB,
  payload: {
    currentCalculation,
    result,
  },
});

export const updateResult = ({ currentCalculation, result = 0 }) => ({
  type: UPDATE_RESULT,
  payload: {
    currentCalculation,
    result,
  }
});

export const reset = () => ({
  type: RESET,
});
