import axios from 'axios';

const API_KEY = '32407272-8586469b42e966f16f1a46a56';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const axiosOptions = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      page: page,
      orientation: 'horizontal',
      per_page: 12,
      safesearch: true,
      editors_choice: true,
    },
  };

  const { data, status } = await axios.get(BASE_URL, axiosOptions);

  if (status !== 200 && data.totalHits === 0) {
    alert(`Sorry, there are no pictures for the "${query}". Please try again.`);
  } else return data;
};
