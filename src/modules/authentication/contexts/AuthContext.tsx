import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import AuthInterface from '../models/AuthInterface';

type AuthContextType = [
  auth: AuthInterface,
  setAuth: Dispatch<SetStateAction<AuthInterface>>,
];

export const INITIAL_AUTH: AuthInterface = {
  token: '',
  authenticated: false,
  email: '',
  displayName: '',
  uid: '',
  currentCommunity: '',
};

const AuthContext = createContext<AuthContextType>([
  INITIAL_AUTH,
  () => {
    return '';
  },
]);

const useAuth = () => {
  const [auth, setAuth] = useContext<AuthContextType>(AuthContext);

  const handleAuth = (value: AuthInterface) => {
    const authValue: AuthInterface = mapAuthValue(value);

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
    const authValue: AuthInterface = mapAuthValue(value);

    setAuth(authValue);
  };
  return { onChange: handleAuth };
};

const useClearAuth = () => {
  const [, setAuth] = useContext<AuthContextType>(AuthContext);

  const clearAuth = () => {
    const authValue: AuthInterface = mapAuthValue(INITIAL_AUTH);

    setAuth(authValue);
  };
  return { clearAuth };
};
const AuthProvider: FC = ({ children }) => {
  const authStorage = JSON.parse(String(localStorage.getItem('authStorage')));
  const [auth, setAuth] = useState<AuthInterface>(authStorage || INITIAL_AUTH);

  useEffect(() => {
    localStorage.setItem('authStorage', JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const mapAuthValue = ({
  token,
  authenticated,
  email,
  displayName,
  uid,
  currentCommunity,
}: AuthInterface) => ({
  token,
  authenticated,
  email,
  displayName,
  uid,
  currentCommunity,
});

export { AuthProvider, useAuth, useGetAuth, useHandleAuth, useClearAuth };
