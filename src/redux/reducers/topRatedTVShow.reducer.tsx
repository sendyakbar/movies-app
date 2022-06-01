import {
  REQUESTING_TOP_RATED_TVSHOW,
  REQUEST_TOP_RATED_TVSHOW_SUCCESS,
  REQUEST_TOP_RATED_TVSHOW_FAILED,
} from '../constants/topRatedTVShow.constant';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

export default function topRatedTVShow(state = initialState, action: any) {
  switch (action.type) {
    case REQUESTING_TOP_RATED_TVSHOW:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_TOP_RATED_TVSHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case REQUEST_TOP_RATED_TVSHOW_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return {...state};
  }
}
