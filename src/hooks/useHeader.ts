import { useContext } from 'react';
import { HeaderContext, HeaderContextType } from '../contexts/HeaderContext';

export default (): HeaderContextType => useContext(HeaderContext);
