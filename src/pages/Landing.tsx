import React from 'react';
import styled from 'styled-components';

import KakaoLoginBtn from '../components/KakaoLoginBtn';

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
        <KakaoLoginBtn />
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
