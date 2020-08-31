import { useContext } from 'react';
import {
  ViewportContext,
  ViewportContextType
} from '../contexts/ViewportContext';

export default (): ViewportContextType => useContext(ViewportContext);
