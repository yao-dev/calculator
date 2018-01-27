import { createStore }   from 'redux';
import nextConnectRedux  from 'next-connect-redux';
import thunkMiddleware   from 'redux-thunk';
import calculatorReducer from 'components/Calculator/CalculatorReducer';

export const initStore = (initialState, options) => {
  const REDUX_DEVTOOLS = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || undefined ;

  return createStore(
    calculatorReducer,
    REDUX_DEVTOOLS,
  );
};

export const nextConnect = nextConnectRedux(initStore);
