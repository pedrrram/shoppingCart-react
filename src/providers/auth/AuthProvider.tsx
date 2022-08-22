import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { IAuthContext, AuthActionTypes } from '../../types/AuthTypes';
import { authReducer } from './AuthReducer';

const AuthContext = createContext<IAuthContext>({
  userData: null,
  authDispatch: () => {},
});

const LOCALSTORAGE_AUTH_KEY = 'userState';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [userData, dispatch] = useReducer(authReducer, null);

  useEffect(() => {
    let userLocalStorageData = localStorage.getItem(LOCALSTORAGE_AUTH_KEY);
    userLocalStorageData = userLocalStorageData
      ? JSON.parse(userLocalStorageData)
      : null;
    dispatch({ type: AuthActionTypes.SET_USER, payload: userLocalStorageData });
  }, []);

  useEffect(() => {
    const data = JSON.stringify(userData);
    localStorage.setItem(LOCALSTORAGE_AUTH_KEY, data);
  }, [userData]);

  return (
    <AuthContext.Provider value={{ userData, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { userData, authDispatch } = useContext(AuthContext);
  return { userData, authDispatch };
};
export default AuthProvider;
