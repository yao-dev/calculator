export const RESET         = 'RESET';
export const INIT_LOCAL_DB = 'INIT_LOCAL_DB';
export const UPDATE_RESULT = 'UPDATE_RESULT';

export const initialState = {
  currentCalculation: '0',
  result: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_LOCAL_DB: {
      const { currentCalculation, result } = action.payload;

      return {
        ...state,
        currentCalculation,
        result,
      };
    }
    return action.payload.dbState;
    case UPDATE_RESULT: {
      const { currentCalculation, result } = action.payload;

      return {
        ...state,
        currentCalculation,
        result,
      };
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
