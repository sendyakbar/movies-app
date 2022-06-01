import {
  REQUESTING_POPULAR_MOVIES,
  REQUEST_POPULAR_MOVIES_SUCCESS,
  REQUEST_POPULAR_MOVIES_FAILED,
} from '../constants/popularMovies.constant';
import {getPopularMovies} from '../../services/httpServices';

export const requestPopularMovies = (page: number) => async (dispatch: any) => {
  dispatch({type: REQUESTING_POPULAR_MOVIES});
  try {
    const data = await getPopularMovies(page);
    dispatch({
      type: REQUEST_POPULAR_MOVIES_SUCCESS,
      data,
    });
  } catch (err) {
    dispatch({
      type: REQUEST_POPULAR_MOVIES_FAILED,
      error: JSON.stringify(err),
    });
  }
};
