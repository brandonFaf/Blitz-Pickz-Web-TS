import { useEffect, useRef, Dispatch, SetStateAction } from 'react';
import useToggleState from './useToggleState';
const useClickOutsideToggle = (): [
  boolean,
  () => void,
  React.MutableRefObject<HTMLDivElement | undefined>,
  Dispatch<SetStateAction<boolean>>
] => {
  const ref = useRef<HTMLDivElement>();
  const [state, toggle, set] = useToggleState(false);

  useEffect(() => {
    const handleClickOutside = e => {
      console.log('clicking anywhere');
      if (ref.current && ref.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      toggle();
    };
    if (state) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, state, toggle]);
  return [state, toggle, ref, set];
};

export default useClickOutsideToggle;
