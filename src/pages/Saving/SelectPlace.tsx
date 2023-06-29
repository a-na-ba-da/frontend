import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/Header/HeaderLeft';
import PostBack from '../../components/Post/PostBack';
import MapSelectPoint from '../../components/Map/MapSelectPoint';
import HeaderRight from '../../components/Header/HeaderRight';

export default function SelectPlace() {
  return (
    <SelectPlaceLayout>
      <Header title="위치 선택">
        <HeaderLeft>
          <PostBack color="#8F00FF" whatShape="cross" />
        </HeaderLeft>
        <HeaderRight>
          <ConfirmText>확인</ConfirmText>
        </HeaderRight>
      </Header>
      <MapSelectPoint />
    </SelectPlaceLayout>
  );
}

const SelectPlaceLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ConfirmText = styled.span`
  color: #8f00ff;
  font-size: 18px;
`;
