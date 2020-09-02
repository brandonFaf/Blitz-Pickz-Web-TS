export const validateForm = (values, setErrors) => {
  let dnv;
  if (!values.display_name) {
    dnv = false;
    setErrors(e => ({
      ...e,
      displayName: 'Display name is required'
    }));
  } else {
    //username exists, is longer than 4 and less than 20
    dnv = values.display_name.length >= 2 && values.display_name.length < 30;
  }
  if (!dnv) {
    setErrors(e => ({
      ...e,
      displayName: 'Invalid Display Name'
    }));
  } else {
    setErrors(e => ({
      ...e,
      displayName: null
    }));
  }

  return dnv;
};
