import { useContext } from 'react';
import { WeekContext, WeekContextType } from '../contexts/WeekContext';

export default (): WeekContextType => useContext(WeekContext);
