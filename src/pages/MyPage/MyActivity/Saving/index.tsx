import React from 'react';
import styled from 'styled-components';

import PostBack from '../../../../components/Post/PostBack';

export default function MySavingActivity() {
  return (
    <MyActivityLayout>
      <HeaderWrapper>
        <Header>
          <PostBackWrapper>
            <PostBack color="#8f00ff" whatShape="back" />
          </PostBackWrapper>
          나의 아껴쓰기
        </Header>
      </HeaderWrapper>
    </MyActivityLayout>
  );
}

const MyActivityLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const HeaderWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  width: calc(100vw - 20px);
  height: 64px;
  margin: 0 auto;
  border-bottom: 1px solid #eaeaeb;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;

const PostBackWrapper = styled.div`
  position: absolute;
  top: -6px;
  left: -5px;
`;
