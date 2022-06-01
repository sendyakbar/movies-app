import {
  REQUESTING_NOWPLAYING_MOVIES,
  REQUEST_NOWPLAYING_MOVIES_SUCCESS,
  REQUEST_NOWPLAYING_MOVIES_FAILED,
} from '../constants/nowPlaying.constant';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

export default function nowPlayingMovies(state = initialState, action: any) {
  switch (action.type) {
    case REQUESTING_NOWPLAYING_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_NOWPLAYING_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case REQUEST_NOWPLAYING_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return {...state};
  }
}
