import {
  REQUESTING_TOP_RATED_MOVIES,
  REQUEST_TOP_RATED_MOVIES_SUCCESS,
  REQUEST_TOP_RATED_MOVIES_FAILED,
} from '../constants/topRatedMovies.constant';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

export default function topRatedMovies(state = initialState, action: any) {
  switch (action.type) {
    case REQUESTING_TOP_RATED_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case REQUEST_TOP_RATED_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return {...state};
  }
}
