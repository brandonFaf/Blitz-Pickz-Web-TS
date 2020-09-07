import React, { useState } from 'react';
import HighlightText from '../../Styles/Shared/HighlightText';
import ActionButton from '../../Styles/Shared/ActionButton';

const CreateConfirmation = ({ groupId }) => {
  const [showCopied, setShowCopied] = useState(false);
  const copy = () => {
    var tempInput = document.createElement('input');
    tempInput.value = `https://blitzpickz.com/groups/join?id=${groupId}`;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setShowCopied(true);
  };
  return (
    <>
      <HighlightText style={{ marginBottom: 10, marginTop: 10 }}>
        https://blitzpickz.com/groups/join?id={groupId}
      </HighlightText>
      <ActionButton onClick={copy}>Copy Link</ActionButton>
      {showCopied && <HighlightText>Copied!</HighlightText>}
    </>
  );
};
export default CreateConfirmation;
