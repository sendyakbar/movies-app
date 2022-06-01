import axios from 'axios';
import {API_KEY} from '@env';

import {topRatedMovies, topRatedTVShow} from './api';

export const getTopRatedMovies = async (page: number) => {
  try {
    const {data} = await axios.get(topRatedMovies, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    return data;
  } catch (err) {
    return JSON.stringify(err);
  }
};

export const getTopRatedTVShow = async (page: number) => {
  try {
    const {data} = await axios.get(topRatedTVShow, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    return data;
  } catch (err) {
    return JSON.stringify(err);
  }
};
