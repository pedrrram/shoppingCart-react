import { ILoginUser } from '../types/IUserLogin';
import http from './httpService';

export const loginUser = (data: ILoginUser) => {
  return http.post('/user/login', data);
};
