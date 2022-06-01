import {
  REQUESTING_POPULAR_TVSHOW,
  REQUEST_POPULAR_TVSHOW_SUCCESS,
  REQUEST_POPULAR_TVSHOW_FAILED,
} from '../constants/popularTVShow.constant';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

export default function popularTVShow(state = initialState, action: any) {
  switch (action.type) {
    case REQUESTING_POPULAR_TVSHOW:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_POPULAR_TVSHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case REQUEST_POPULAR_TVSHOW_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return {...state};
  }
}
