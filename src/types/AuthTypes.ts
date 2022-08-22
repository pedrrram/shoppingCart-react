import { Dispatch } from 'react';

export enum AuthActionTypes {
  SET_USER = 'SET_USER',
}

export interface IUserData {
  _id: string;
  name: string;
  phoneNumber: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export interface IAuthContext {
  userData: IUserData | null;
  authDispatch: Dispatch<IAuthAction>;
}

export interface IAuthAction {
  type: AuthActionTypes;
  payload?: any;
}
