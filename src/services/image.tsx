import {IMG_BASE_URL} from '@env';

export const getImageUri = (size: number, path: string) => {
  return `${IMG_BASE_URL}/w${size}${path}`;
};
