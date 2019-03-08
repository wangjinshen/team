import request from '../utils/request';
import axios from 'axios'
export function query(opt) {
  return request('user/login',opt);
}

export function userLogin(data) {
  return axios.post('/api/user/login',data);
}
