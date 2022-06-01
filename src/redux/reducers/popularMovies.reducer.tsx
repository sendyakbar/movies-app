import {
  REQUESTING_POPULAR_MOVIES,
  REQUEST_POPULAR_MOVIES_SUCCESS,
  REQUEST_POPULAR_MOVIES_FAILED,
} from '../constants/popularMovies.constant';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

export default function popularMovies(state = initialState, action: any) {
  switch (action.type) {
    case REQUESTING_POPULAR_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case REQUEST_POPULAR_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return {...state};
  }
}
