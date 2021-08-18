import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import AuthInterface from '../models/Auth/AuthInterface';

type AuthContextType = [
  auth: AuthInterface,
  setAuth: Dispatch<SetStateAction<AuthInterface>>,
];

const AuthContext = createContext<AuthContextType>([
  { authenticated: false, email: '', displayName: '' },
  () => {
    return '';
  },
]);

const useAuth = () => {
  const [auth, setAuth] = useContext<AuthContextType>(AuthContext);

  const handleAuth = (value: AuthInterface) => {
    const authValue: AuthInterface = {
      authenticated: true,
      email: value.email,
      displayName: value.displayName,
    };

    setAuth(authValue);
  };
  return { value: auth, onChange: handleAuth };
};

const useGetAuth = () => {
  const [auth] = useContext<AuthContextType>(AuthContext);

  return { value: auth };
};

const useHandleAuth = () => {
  const [, setAuth] = useContext<AuthContextType>(AuthContext);

  const handleAuth = (value: AuthInterface) => {
    const authValue: AuthInterface = {
      authenticated: true,
      email: value.email,
      displayName: value.displayName,
    };

    setAuth(authValue);
  };
  return { onChange: handleAuth };
};

const useClearAuth = () => {
  const [, setAuth] = useContext<AuthContextType>(AuthContext);

  const clearAuth = () => {
    const authValue: AuthInterface = {
      authenticated: false,
      email: '',
      displayName: '',
    };

    setAuth(authValue);
  };
  return { clearAuth };
};
const AuthProvider: FC = ({ children }) => {
  const authStorage = JSON.parse(String(localStorage.getItem('authStorage')));
  const [auth, setAuth] = useState<AuthInterface>(authStorage);

  useEffect(() => {
    localStorage.setItem('authStorage', JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth, useGetAuth, useHandleAuth, useClearAuth };
