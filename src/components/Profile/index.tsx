/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase/app';
import 'firebase/storage';
import useForm from '../../hooks/useForm';
import Input from '../Shared/FloatingInput';
import ProfilePhoto from './ProfilePhoto';
import {
  ProfileForm,
  EditLabel,
  ErrorLabel
} from '../../Styles/Profile/ProfilePage';
import ActionButton from '../../Styles/Shared/ActionButton';
import '../../Styles/ToggleCSS.css';
import { GroupFormError } from '../../Styles/Groups';
import { UserModel } from '../../types/UserTypes';
import { useUpdateUserMutation } from '../../types/graphql.types';
import { validateForm } from './validateForm';
import useUser from '../../hooks/useUser';

type ProfileFormErrors = {
  displayName: string | null;
};
type Props = {
  user: UserModel;
  toggleProfile?: () => void;
};
const Profile: React.FC<Props> = ({ user, toggleProfile }) => {
  const [updateUser, { loading, error }] = useUpdateUserMutation();
  const { values, handleChange } = useForm<UserModel>({
    ...user
  });
  const [errors, setErrors] = useState<ProfileFormErrors>({
    displayName: null
  });
  const { setUser } = useUser();
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (await validateForm(values, setErrors)) {
      console.log(JSON.stringify(values));
      const res = await updateUser({
        variables: {
          user_id: user.id,
          displayName: values.display_name ?? '',
          photoUrl: values.photo_url
        }
      }).catch(({ graphQLErrors, networkError }) => {
        console.log('error coming in ere');
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message }: { message: string }): void => {
            if (message.indexOf('display_name') >= 0) {
              setErrors(e => ({
                ...e,
                displayName: 'display name taken'
              }));
            } else {
              console.log(`[GQL error]: ${message}`);
            }
          });
        }
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
        return false;
      });
      if (res) {
        setUser({
          id: user.id,
          display_name: values.display_name,
          photo_url: values.photo_url
        });
        if (toggleProfile) {
          toggleProfile();
        }
      }
    }
  };

  const handleUploadSuccess = (filename: string) => {
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(photoURL => {
        //@ts-ignore
        handleChange({ target: { name: 'photo_url', value: photoURL } });
      });
  };

  const handleUploadStart = () => console.log('starting');
  const handleUploadError = (error: any) => {
    console.error(error);
  };
  return (
    <>
      <ProfileForm onSubmit={submitForm} side>
        {user && (
          <div style={{ justifySelf: 'center' }}>
            <ProfilePhoto
              size='large'
              src={values.photo_url ?? ''}
              displayName={values.display_name ?? ''}
            />
            <EditLabel>
              <FileUploader
                hidden
                accept='image/*'
                name='avatar'
                filename={() => user.id}
                storageRef={firebase.storage().ref('images')}
                onUploadStart={handleUploadStart}
                onUploadError={handleUploadError}
                onUploadSuccess={handleUploadSuccess}
              />
            </EditLabel>
          </div>
        )}

        <fieldset>
          <Input
            label='Name'
            name='display_name'
            onChange={handleChange}
            value={values.display_name}
          />
          {errors.displayName && (
            <GroupFormError className='error'>
              {errors.displayName}
            </GroupFormError>
          )}
        </fieldset>
        <>
          {error && <ErrorLabel>Error Saving</ErrorLabel>}
          {loading && <div>Loading...</div>}
        </>
        <ActionButton type='submit'>Save</ActionButton>
      </ProfileForm>
    </>
  );
};

export default Profile;
