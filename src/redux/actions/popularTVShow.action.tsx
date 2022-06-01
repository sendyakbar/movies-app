import {
  REQUESTING_POPULAR_TVSHOW,
  REQUEST_POPULAR_TVSHOW_SUCCESS,
  REQUEST_POPULAR_TVSHOW_FAILED,
} from '../constants/popularTVShow.constant';
import {getPopularTVShow} from '../../services/httpServices';

export const requestPopularTVShow = (page: number) => async (dispatch: any) => {
  dispatch({type: REQUESTING_POPULAR_TVSHOW});
  try {
    const data = await getPopularTVShow(page);
    dispatch({
      type: REQUEST_POPULAR_TVSHOW_SUCCESS,
      data,
    });
  } catch (err) {
    dispatch({
      type: REQUEST_POPULAR_TVSHOW_FAILED,
      error: JSON.stringify(err),
    });
  }
};
