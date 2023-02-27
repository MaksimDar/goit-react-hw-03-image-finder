import axios from 'axios';

const PRIVATE_KEY = '324072728586469b42e966f16f1a46a56';
const BASE_URL = 'https://pixabay.com/api/';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchImages = async (q, page) => {
  const config = {
    params: {
      key: PRIVATE_KEY,
      image_type: 'photo',
      q,
      page,
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 12,
    },
  };

  const response = await instance.get('/', config);
  return response.data;
};
