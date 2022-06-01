import {
  REQUESTING_NOWPLAYING_MOVIES,
  REQUEST_NOWPLAYING_MOVIES_SUCCESS,
  REQUEST_NOWPLAYING_MOVIES_FAILED,
} from '../constants/nowPlaying.constant';
import {getNowPlayingMovies} from '../../services/httpServices';

export const requestNowPlayingMovies =
  (page: number) => async (dispatch: any) => {
    dispatch({type: REQUESTING_NOWPLAYING_MOVIES});
    try {
      const data = await getNowPlayingMovies(page);
      dispatch({
        type: REQUEST_NOWPLAYING_MOVIES_SUCCESS,
        data,
      });
    } catch (err) {
      dispatch({
        type: REQUEST_NOWPLAYING_MOVIES_FAILED,
        error: JSON.stringify(err),
      });
    }
  };
