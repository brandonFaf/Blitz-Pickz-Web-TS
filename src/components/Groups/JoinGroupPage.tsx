import styled from 'styled-components/macro';
import React, { useState } from 'react';
import SearchGroup from './SearchGroup';
import Passcode from './Passcode';
import Colors from '../../Styles/colors';
import JoinGroup from './JoinGroup';
import { SearchGroupModel, JoinGroupStages } from '../../types/GroupTypes';
import closeX from '../../img/close.svg';
import { Header, ModalHeader } from '../../Styles/Header';
import { useHistory } from 'react-router-dom';
import useViewport from '../../hooks/useViewport';

const JoinGroupPage = () => {
  const [stage, setStage] = useState<JoinGroupStages>(JoinGroupStages.search);
  const [group, setGroup] = useState<SearchGroupModel | null>(null);
  const navigate = (nextStage: JoinGroupStages, g: SearchGroupModel | null) => {
    setStage(nextStage);
    setGroup(g);
  };
  const history = useHistory();
  const { isMobile } = useViewport();

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
  const close = () => {
    history.push('/');
  };
  const HeaderContent = (
    <>
      <img src={closeX} alt='close' onClick={close} />
      <div className='header-text'>Join Group</div>
    </>
  );
  return (
    <JGP>
      {isMobile ? (
        <Header>{HeaderContent}</Header>
      ) : (
        <ModalHeader>{HeaderContent}</ModalHeader>
      )}
      {getStage()}
    </JGP>
  );
};
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
    &::-webkit-scrollbar {
      width: 5px; /* width of the entire scrollbar */
    }
    &::-webkit-scrollbar-track {
      background: #0c1d34; /* color of the tracking area */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #6fe793; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }

    scrollbar-width: thin;
    scrollbar-color: #6fe793 #0c1d34;
  }
`;

export default JoinGroupPage;
