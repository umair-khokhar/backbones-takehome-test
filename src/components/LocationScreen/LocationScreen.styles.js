import styled from 'styled-components';

import brickBGImg from '../../assets/images/brick-bg.jpg';

const MainContainer = styled.div`
  margin-top:15px;
  margin-bottom:30px;
`;

const MainContainerWrapper = styled.div`
  max-width:1200px;
  width:100%;
  margin:0px auto;
`;

const ContentBox = styled.div`
  padding: 100px 0px;
  background:url(${brickBGImg});
  background-repeat:repeat;
  background-size: cover;
  background-position: initial;
`;

export {
  MainContainer,
  MainContainerWrapper,
  ContentBox
}