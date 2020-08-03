import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Input from '../Shared/FloatingInput';
import ActionButton from '../../Styles/Shared/ActionButton';
import { GroupFormError } from '../../Styles/Groups';
import { JoinGroupParams, JoinGroupStages } from '../../types/GroupTypes';

const Passcode: React.FC<JoinGroupParams> = ({ navigate, group }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const handleChange = e => {
    setPasscode(e.target.value);
  };
  const submit = async () => {
    if (passcode === group.passcode) {
      navigate(JoinGroupStages.join, group);
    } else {
      setError(true);
    }
  };
  return (
    <div style={{ width: '70vw' }}>
      <Input
        label='Passcode'
        name='passcode'
        onChange={handleChange}
        value={passcode}
      />
      {error && (
        <GroupFormError>
          That passcode is incorrect. Please try again with a different passcode
        </GroupFormError>
      )}
      <ButtonContainer>
        <Button onClick={submit}>Join</Button>
        <Button onClick={() => navigate(JoinGroupStages.search, null)}>
          Cancel
        </Button>
      </ButtonContainer>
    </div>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled(ActionButton)`
  margin-bottom: 15px;
`;

export default Passcode;
