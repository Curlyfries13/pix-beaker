import axios from 'axios';
import { config } from './pixabayAPI.key';

export function getResultPromise(keyword:string='', category:string='') {
  return axios({
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      key: config.key,
      q: keyword,
      category: category,
      per_page: 10,
    }
  });
}
