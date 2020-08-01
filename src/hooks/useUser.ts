import { useContext } from 'react';
import { UserContext, UserContextType } from '../contexts/UserContext';

export default (): UserContextType => useContext(UserContext);
