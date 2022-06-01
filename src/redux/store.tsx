import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxLogger);
}

const appReducers = combineReducers({
  // add reducers here
});

const store = createStore(appReducers, applyMiddleware(...middleware));

export default store;
