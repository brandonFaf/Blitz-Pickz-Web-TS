export const validateForm = (values, setErrors, allowNotifications) => {
  let dnv, pv, pm;
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
      phoneNumber: 'Invalid Phone Number'
    }));
  } else {
    setErrors(e => ({
      ...e,
      phoneNumber: null
    }));
  }

  //phonenumber validation

  if (allowNotifications) {
    pm = !values.phone_number;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    pv = values.phone_number ? phoneno.test(String(values.phone_number)) : true;
  } else {
    pv = true;
    pm = false;
  }
  if (!pv) {
    setErrors(e => ({
      ...e,
      phoneNumber: 'Invalid Phone Number'
    }));
  } else if (pm) {
    setErrors(e => ({
      ...e,
      phoneNumber: 'Phone number is required to receive notifications'
    }));
  } else {
    setErrors(e => ({
      ...e,
      phoneNumber: null
    }));
  }

  const valid = dnv && pv && !pm ? true : false;
  return valid;
};
