import styled from 'styled-components/macro';
import React, { useState } from 'react';
import SearchGroup from './SearchGroup';
import Passcode from './Passcode';
import Colors from '../../Styles/colors';
import JoinGroup from './JoinGroup';
import { SearchGroupModel, JoinGroupStages } from '../../types/GroupTypes';

const JoinGroupPage = () => {
  const [stage, setStage] = useState<JoinGroupStages>(JoinGroupStages.search);
  const [group, setGroup] = useState<SearchGroupModel | null>(null);
  const navigate = (nextStage: JoinGroupStages, g: SearchGroupModel | null) => {
    setStage(nextStage);
    setGroup(g);
  };
  const getStage = () => {
    if (!group) {
      return <SearchGroup navigate={navigate} />;
    } else {
      if (stage === JoinGroupStages.passcode) {
        return <Passcode navigate={navigate} group={group} />;
      }
      return <JoinGroup navigate={navigate} group={group} />;
    }
  };

  return <JGP>{getStage()}</JGP>;
};
const JGP = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.background};
  height: 100vh;
  width: 100vw;
  z-index: 60;
`;

export default JoinGroupPage;
