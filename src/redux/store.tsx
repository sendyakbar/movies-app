import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

const middleware: any = [thunk];

if (process.env?.NODE_ENV === 'development') {
  middleware.push(reduxLogger);
}

import topRatedMovies from './reducers/topRatedMovies.reducer';
import topRatedTVShow from './reducers/topRatedTVShow.reducer';

const appReducers = combineReducers({
  // add reducers here
  topRatedMovies,
  topRatedTVShow,
});

const store = createStore(appReducers, applyMiddleware(...middleware));

export default store;
