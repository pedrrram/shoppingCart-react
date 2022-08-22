import { IAuthAction, AuthActionTypes } from '../../types/AuthTypes';

export const authReducer = (state: boolean, action: IAuthAction): any => {
  switch (action.type) {
    case AuthActionTypes.SET_USER:
      return action.payload;
    case AuthActionTypes.LOGOUT_USER:
      return null;
    default:
      return state;
  }
};
