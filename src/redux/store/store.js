import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import profile from '../reducers/profile';

const rootReducer = combineReducers({
  user: profile
});

const ConfigureStore = () => {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
  );
};

export default ConfigureStore;