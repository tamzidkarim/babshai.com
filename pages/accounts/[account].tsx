import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

const Account = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  return <div>Hello {user.name}</div>;
};

export default Account;
