import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

const middleware: any = [thunk];

if (process.env?.NODE_ENV === 'development') {
  middleware.push(reduxLogger);
}

import topRatedMovies from './reducers/topRatedMovies.reducer';
import topRatedTVShow from './reducers/topRatedTVShow.reducer';
import upcomingMovies from './reducers/upcomingMovies.reducer';
import nowPlayingMovies from './reducers/nowPlayingMovies.reducer';
import popularMovies from './reducers/popularMovies.reducer';
import popularTVShow from './reducers/popularTVShow.reducer';

const appReducers = combineReducers({
  // add reducers here
  topRatedMovies,
  topRatedTVShow,
  upcomingMovies,
  nowPlayingMovies,
  popularMovies,
  popularTVShow,
});

const store = createStore(appReducers, applyMiddleware(...middleware));

export default store;
