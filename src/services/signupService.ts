import { IUserSignup } from '../types/IUserSignup';
import http from './httpService';

export const signupUSer = (user: IUserSignup) => {
  return http.post('/user/register', user);
};
