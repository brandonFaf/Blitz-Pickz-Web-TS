import { useState, SyntheticEvent } from 'react';

const useForm = <T>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = (event: SyntheticEvent) => {
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
    console.log(name, value);
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };

  return {
    handleChange,
    values
  };
};

export default useForm;
