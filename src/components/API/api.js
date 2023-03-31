import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '33610632-7e8c2f7a73fdbb86134be2184';

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`
    ${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);

  return data;
};
