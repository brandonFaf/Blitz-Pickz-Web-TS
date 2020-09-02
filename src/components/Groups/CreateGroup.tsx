import React, { useState } from 'react';
import Input from '../Shared/FloatingInput';
import useForm from '../../hooks/useForm';
import useToggleState from '../../hooks/useToggleState';
import { validateGroupForm } from '../../helpers/validateGroupForm';
import {
  useCreateGroupMutation,
  GetGroupsDocument
} from '../../types/graphql.types';
import useUser from '../../hooks/useUser';
import useGroup from '../../hooks/useGroup';
import { CreateGroupForm, GroupFormError } from '../../Styles/Groups';
import Toggle from 'react-toggle';
import ActionButton from '../../Styles/Shared/ActionButton';
import { useHistory } from 'react-router-dom';
import { Header, ModalHeader } from '../../Styles/Header';
import closeX from '../../img/close.svg';
import styled from 'styled-components/macro';
import Colors from '../../Styles/colors';
import useViewport from '../../hooks/useViewport';

export type CreateGroupModel = {
  groupName: string;
  passcode?: string;
};
type CreateGroupErrors = {
  groupName: string | null;
  passcode: string | null;
};
const initialState: CreateGroupModel = {
  groupName: '',
  passcode: ''
};
const CreateGroup = () => {
  const history = useHistory();
  const { isMobile } = useViewport();
  const { values, handleChange } = useForm<CreateGroupModel>(initialState);
  const { user } = useUser();
  const { setGroup } = useGroup();
  const [makePrivate, toggleMakePrivate] = useToggleState(false);
  const [errors, setErrors] = useState<CreateGroupErrors>({
    groupName: null,
    passcode: null
  });
  const [createGroup, { loading }] = useCreateGroupMutation({
    refetchQueries: [
      { query: GetGroupsDocument, variables: { user_id: user.id } }
    ],
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message }) => {
          if (message.indexOf('display_name') >= 0) {
            setErrors(e => ({
              ...e,
              groupName: 'League name is taken'
            }));
          } else {
            console.log(`[GQL error]: ${message}`);
          }
        });
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }
  });
  const submitForm = async () => {
    if (validateGroupForm(values, setErrors, makePrivate)) {
      const variables = {
        display_name: values.groupName.toUpperCase(),
        private: makePrivate,
        passcode: makePrivate ? values.passcode : null,
        admin_id: user.id
      };
      const result = await createGroup({
        variables
      }).catch(e => console.log(e));
      if (result) {
        const group = result?.data?.insert_group_user?.returning[0]?.group;
        setGroup(group);
        history.push('/');
      }
    }
    console.log('errors:', errors);
  };
  const close = () => {
    history.push('/');
  };
  const HeaderContent = (
    <>
      <img src={closeX} alt='close' onClick={close} />
      <div className='header-text'>Create Group</div>
    </>
  );
  return (
    <JGP>
      {isMobile ? (
        <Header>{HeaderContent}</Header>
      ) : (
        <ModalHeader>{HeaderContent}</ModalHeader>
      )}
      <CreateGroupForm onSubmit={submitForm}>
        <fieldset>
          <Input
            data-testid='groupName'
            label='League Name'
            name='groupName'
            onChange={handleChange}
            value={values.groupName}
          />
          {!errors.groupName && (
            <GroupFormError data-testid='groupNameError' className='error'>
              {errors.groupName}
            </GroupFormError>
          )}
          {makePrivate && (
            <>
              <Input
                label='Passcode'
                name='passcode'
                type='text'
                onChange={handleChange}
                value={values.passcode}
              />
              {!errors.passcode && (
                <GroupFormError className='error'>
                  {errors.passcode}
                </GroupFormError>
              )}
            </>
          )}
          <label className='toggle-label' htmlFor='private'>
            Private?
          </label>
          <Toggle
            id='private'
            defaultChecked={makePrivate}
            onChange={toggleMakePrivate}
          />
        </fieldset>
        <ActionButton
          data-testid='submitButton'
          onClick={submitForm}
          type='submit'
        >
          {loading ? 'CREATING' : 'CREATE'}
        </ActionButton>
      </CreateGroupForm>
    </JGP>
  );
};
export default CreateGroup;
const JGP = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.background};
  height: 100vh;
  width: 100vw;
  z-index: 60;
  @media (min-width: 620px) {
    width: 80%;
    height: 80%;
  }
`;
