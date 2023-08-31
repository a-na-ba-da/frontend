import React from 'react';
import styled from 'styled-components';

import Kakaotalk from '../asset/img/kakaotalk.png';

export default function Landing() {
  return (
    <LandingLayout>
      <LogoSection>
        <Logo>아나바다</Logo>
      </LogoSection>
      <SubtitleSection>
        <Subtitle>티끌모아 태산까지</Subtitle>
      </SubtitleSection>
      <KakaotalkBtnSection>
        <KakaotalkBtn>
          <KakaotalkBtnImg alt="kakaotalkicon" src={Kakaotalk} />
          <KakaotalkBtnText>카카오로 시작하기</KakaotalkBtnText>
        </KakaotalkBtn>
      </KakaotalkBtnSection>
    </LandingLayout>
  );
}

const LandingLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #8f00ff;
`;

const LogoSection = styled.div`
  padding-top: 30vh;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
`;

const SubtitleSection = styled.div`
  padding-top: 5vh;
`;

const Subtitle = styled.h2`
  margin: 0;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`;

const KakaotalkBtnSection = styled.div`
  padding-top: 5vh;
`;

const KakaotalkBtn = styled.button`
  display: flex;
  width: 70vw;
  max-width: 500px;
  height: 42px;
  margin: 0 auto;
  border: 0;
  border-radius: 5px;
  background-color: #f9e000;
  color: #513838;
  align-items: center;
`;

const KakaotalkBtnImg = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  margin-left: 5px;
`;

const KakaotalkBtnText = styled.span`
  position: relative;
  @media screen and (max-width: 425px) {
    left: 3%;
  }
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
`;
