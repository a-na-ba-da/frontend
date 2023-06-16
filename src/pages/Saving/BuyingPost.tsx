import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import PostComment from '../../components/Post/PostComment';
import PostHeader from '../../components/Post/PostHeader';

const BuyingPost = () => {
  return (
    <PostLayout>
      <ImageBox></ImageBox>
      <Main>
        {/* props.children으로 전달된 Button 컴포넌트를 헤더 내부에서 배치 */}
        <PostHeader>
          <Button />
        </PostHeader>
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
        <PostComment />
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
