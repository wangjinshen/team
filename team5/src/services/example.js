import request from '../utils/request';
import axios from 'axios'

export function query(url,opt) {
  return request(url,opt);
}
//用户名
export function userLogin(opt) {
  return axios.post('/api/user/login',opt);
}
//用户信息
export function userIn() {
  return axios.get('/api/user');
}


