import request from '../utils/request';
import axios from 'axios'
export function query(url,opt) {
  return request(url,opt);
}

export function userLogin(opt) {
  return axios.post('/api/user/login',opt);
}
