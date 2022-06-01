import axios from 'axios';
import {API_KEY} from '@env';

import {topRatedMovies} from './api';

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
