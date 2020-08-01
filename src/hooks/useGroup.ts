import { useContext } from 'react';
import { GroupContext, GroupContextType } from '../contexts/GroupContext';

export default (): GroupContextType => useContext(GroupContext);
