import React from 'react';
import styled from 'styled-components';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

import Button from '../../components/Button';
import Comment from '../../components/Comment';

const BuyingPost = () => {
  return (
    <PostLayout>
      <ImageBox></ImageBox>
      <Main>
        <HeaderSection>
          <HeaderUserBox>
            <HeaderUserImg>
              <AccountCircleTwoToneIcon sx={{ fontSize: 32 }} />
            </HeaderUserImg>
            <HeaderUserNameText>어두운 박쥐123</HeaderUserNameText>
          </HeaderUserBox>
          <Button />
        </HeaderSection>
        <ContentSection>
          <TitleBox>썬크림 1 + 1</TitleBox>
          <DateBox>2020.11.06</DateBox>
          <DescriptionBox>공구 날짜 | 2020.11.06</DescriptionBox>
          <DescriptionBox>전달 방법 | 대면</DescriptionBox>
          <DescriptionBox>
            내가 내야할 금액 | <PriceText>5,000원</PriceText>
          </DescriptionBox>
          <MainTextBox>
            올리브영 닥터지 썬크림 같이 사실분 구합니다.
          </MainTextBox>
        </ContentSection>
        <Comment />
      </Main>
    </PostLayout>
  );
};

export default BuyingPost;

const PostLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ImageBox = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: #d9d9d9;
`;

const Main = styled.main`
  padding: 0 15px 200px 15px;
`;

const HeaderSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
  padding: 15px 0;
`;

const HeaderUserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderUserImg = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderUserNameText = styled.span`
  font-size: 18px;
`;

const ContentSection = styled.section`
  padding: 15px 0;
`;

const TitleBox = styled.div`
  font-size: 22px;
`;

const DateBox = styled.div`
  color: #999999;
  font-size: 13px;
  padding: 5px 0 10px 0;
`;

const DescriptionBox = styled.div`
  color: #8f8f8f;
  font-size: 14px;
  padding: 3px 0;
`;

const MainTextBox = styled.div`
  font-size: 16px;
  padding: 15px 0;
`;

const PriceText = styled.span`
  color: #8f00ff;
  font-size: 16px;
  display: inline;
  vertical-align: middle;
`;
