import { useState, SetStateAction } from 'react';

const useToggleState: (
  initialState: boolean
) => [boolean, () => void, React.Dispatch<SetStateAction<boolean>>] = (
  initialState: boolean
) => {
  const [state, set] = useState(initialState);
  const toggle = () => {
    set(!state);
  };
  return [state, toggle, set];
};

export default useToggleState;
