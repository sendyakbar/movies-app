import {
  REQUESTING_TOP_RATED_MOVIES,
  REQUEST_TOP_RATED_MOVIES_SUCCESS,
  REQUEST_TOP_RATED_MOVIES_FAILED,
} from '../constants/topRatedMovies.constant';
import {getTopRatedMovies} from '../../services/httpServices';

export const requestTopRatedMovies =
  (page: number) => async (dispatch: any) => {
    dispatch({type: REQUESTING_TOP_RATED_MOVIES});
    try {
      const data = await getTopRatedMovies(page);
      dispatch({
        type: REQUEST_TOP_RATED_MOVIES_SUCCESS,
        data,
      });
    } catch (err) {
      // error
      dispatch({
        type: REQUEST_TOP_RATED_MOVIES_FAILED,
        error: JSON.stringify(err),
      });
    }
  };
