import {
  REQUESTING_UPCOMING_MOVIES,
  REQUEST_UPCOMING_MOVIES_SUCCESS,
  REQUEST_UPCOMING_MOVIES_FAILED,
} from '../constants/upcomingMovies.constant';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

export default function upcomingMovies(state = initialState, action: any) {
  switch (action.type) {
    case REQUESTING_UPCOMING_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case REQUEST_UPCOMING_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return {...state};
  }
}
