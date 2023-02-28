import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32407272-8586469b42e966f16f1a46a56';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getPhotos = async (q, page) => {
  const config = {
    params: {
      key: API_KEY,
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

// https://pixabay.com/api/?q=cat&page=1 & key=your_key&image_type=photo& orientation=horizontal&per_page=12
