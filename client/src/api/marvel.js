import { publicKey } from '../constants';
import axios from 'axios';
const fetch = async (order, limit = 1, offset, type, search, startYear, months) => {
  let url = ``;
  switch (type) {
    case 'character':
      url = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&apikey=${publicKey}`;
      if (search) {
        url = url + `&nameStartsWith=${search}`;
      }
      break;
    default:
      url = `https://gateway.marvel.com:443/v1/public/comics?apikey=${publicKey}&limit=${limit}`;
      if (search) {
        url = url + `&titleStartsWith=${search}`;
      }
      if (months) {
        const monthsArr = months.split(',');
        url = url + `&dateRange=${monthsArr[0]}%2C${monthsArr[1]}`;
      }
      if (startYear) {
        url = url + `&startYear=${startYear}`;
      }
      break;
  }
  if (order) {
    url = url + `&orderBy=${order}`;
  }
  if (offset) {
    url = url + `&offset=${offset}`;
  }
  async function fetchAll() {
    const response = await axios.get(url);
    return response.data;
  }
  return fetchAll();
};

export default fetch;
