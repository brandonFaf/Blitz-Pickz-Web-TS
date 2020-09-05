import React from 'react';
import styled from 'styled-components/macro';
import apple from '../img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import google from '../img/google-play-badge.png';
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const AppImg = styled.img`
  height: 40px;
  @media (min-width: 620px) {
    height: 35px;
  }
`;
const AppButons = () => {
  return (
    <Container>
      <a
        href='https://apps.apple.com/us/app/blitz-pickz/id1525481814'
        style={{ marginRight: 20 }}
      >
        <AppImg src={apple} alt='app store' />
      </a>
      <a href='https://play.google.com/store/apps/details?id=com.BlitzPickz.prod'>
        <AppImg src={google} alt='play store' />
      </a>
    </Container>
  );
};

export default AppButons;
