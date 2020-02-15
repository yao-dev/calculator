import { createStore }   from 'redux';
import nextConnectRedux  from 'next-connect-redux';
import calculatorReducer from 'components/Calculator/reducer';

export const initStore = () => {
  const REDUX_DEVTOOLS = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || undefined ;

  return createStore(
    calculatorReducer,
    REDUX_DEVTOOLS,
  );
};

export const nextConnect = nextConnectRedux(initStore);
