import {
  REQUESTING_UPCOMING_MOVIES,
  REQUEST_UPCOMING_MOVIES_SUCCESS,
  REQUEST_UPCOMING_MOVIES_FAILED,
} from '../constants/upcomingMovies.constant';
import {getUpcomingMovies} from '../../services/httpServices';

export const requestUpcomingMovies =
  (page: number) => async (dispatch: any) => {
    dispatch({type: REQUESTING_UPCOMING_MOVIES});
    try {
      const data = await getUpcomingMovies(page);
      dispatch({
        type: REQUEST_UPCOMING_MOVIES_SUCCESS,
        data,
      });
    } catch (err) {
      dispatch({
        type: REQUEST_UPCOMING_MOVIES_FAILED,
        error: JSON.stringify(err),
      });
    }
  };
