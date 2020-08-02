import React from 'react';
import styled from 'styled-components/macro';
import Colors from '../../Styles/colors';
interface PhotoProps {
  src?: string;
  size: 'small' | 'large';
  alt?: string;
}

const PhotoImg = styled.div<PhotoProps>`
  border-radius: 90px;
  justify-self: center;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  height: ${props => (props.size === 'large' ? '19vh' : '45px')};
  width: ${props => (props.size === 'large' ? '19vh' : '45px')};
  display: inline-grid;
  justify-content: center;
  align-items: center;
`;
const PhotoDiv = styled.div<PhotoProps>`
  border-radius: 90px;
  justify-self: center;
  height: ${props => (props.size === 'large' ? '19vh' : '45px')};
  width: ${props => (props.size === 'large' ? '19vh' : '45px')};
  background-color: #265087;
  color: ${Colors.highlight};
  font-size: ${props => (props.size === 'large' ? '50px' : '20px')};
  display: inline-grid;
  justify-content: center;
  align-items: center;
`;

type ProfilePhotoProps = {
  displayName: string;
  src: string;
  size: 'large' | 'small';
};

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  size,
  src,
  displayName,
  ...rest
}) => {
  let initals =
    displayName &&
    displayName.split(' ').reduce((acc, w) => {
      const word = w.toLowerCase();
      if (
        word !== 'the' &&
        word !== 'of' &&
        word !== 'a' &&
        word !== 'an' &&
        word !== 'to'
      ) {
        acc += w[0];
      }
      return acc;
    }, '');
  if (initals === '') {
    initals = '?';
  }
  console.log('rest', rest);
  if (src) {
    return <PhotoImg size={size} src={src} alt='profile' />;
  }
  return (
    <PhotoDiv size={size}>{initals.substring(0, 2).toUpperCase()}</PhotoDiv>
  );
};

export default React.memo(ProfilePhoto);
