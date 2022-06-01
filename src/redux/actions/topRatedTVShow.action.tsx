import {
  REQUESTING_TOP_RATED_TVSHOW,
  REQUEST_TOP_RATED_TVSHOW_SUCCESS,
  REQUEST_TOP_RATED_TVSHOW_FAILED,
} from '../constants/topRatedTVShow.constant';
import {getTopRatedTVShow} from '../../services/httpServices';

export const requestTopRatedTVShow =
  (page: number) => async (dispatch: any) => {
    dispatch({type: REQUESTING_TOP_RATED_TVSHOW});
    try {
      const data = await getTopRatedTVShow(page);
      dispatch({
        type: REQUEST_TOP_RATED_TVSHOW_SUCCESS,
        data,
      });
    } catch (err) {
      dispatch({
        type: REQUEST_TOP_RATED_TVSHOW_FAILED,
        error: JSON.stringify(err),
      });
    }
  };
