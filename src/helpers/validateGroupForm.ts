import { CreateGroupModel } from '../components/Groups/CreateGroup';

export const validateGroupForm = (
  values: CreateGroupModel,
  setErrors,
  makePrivate: boolean
) => {
  let gnv;
  let pcv = true;
  if (!values.groupName) {
    gnv = false;
    setErrors(e => ({
      ...e,
      groupName: 'League name is required'
    }));
    return false;
  } else {
    //username exists, is longer than 4 and less than 20
    gnv = values.groupName.length >= 3 && values.groupName.length < 40;
  }
  if (!gnv) {
    setErrors(e => ({
      ...e,
      groupName: 'League name must be between 3 and 40 characters'
    }));
  } else {
    setErrors(e => ({
      ...e,
      groupName: null
    }));
  }
  if (makePrivate && !values.passcode) {
    pcv = false;
    setErrors(e => ({
      ...e,
      passcode: 'Passcode is required if making league private'
    }));
  } else {
    pcv = true;
    setErrors(e => ({
      ...e,
      passcode: null
    }));
  }

  const valid = gnv && pcv;
  return valid;
};
