import { createContext, useState } from 'react';

type AuthProps = {
  isAuthenticated: boolean;
  user: UserProps;
  setUser: Function;
  setAuth: any;
};

interface UserProps {
  name?: string;
  email?: string;
}

export const AuthContext = createContext<Partial<AuthProps>>({});

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps>({
    name: '',
    email: '',
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
