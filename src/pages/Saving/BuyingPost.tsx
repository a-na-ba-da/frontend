import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import PostBack from '../../components/Post/PostBack';
import Button from '../../components/Button';
import PostComment from '../../components/Post/PostComment';
import PostHeader from '../../components/Post/PostHeader';
import { getBuyingPost } from '../../api/saving';

export default function BuyingPost() {
  const { id } = useParams();
  const [buyingPost, setBuyingPost] = useState<buyingPostType>();

  useEffect(() => {
    getBuyingPost(id).then((res) => {
      console.log(res.data);
      setBuyingPost(res.data);
    });
  }, []);

  return (
    <PostLayout>
      <PostBack color="white" />
      <ImageBox></ImageBox>
      <Main>
        {/* props.children으로 전달된 Button 컴포넌트를 헤더 내부에서 배치 */}
        <PostHeader>
          <Button />
        </PostHeader>
        <ContentSection>
          <TitleBox>{buyingPost?.title}</TitleBox>
          <DateBox>{buyingPost?.createdAt}</DateBox>
          <DescriptionBox>공구 날짜 | {buyingPost?.buyDate}</DescriptionBox>
          <DescriptionBox>
            전달 방법 | {buyingPost?.onlineDelivery ? '비대면' : '대면'}
          </DescriptionBox>
          <DescriptionBox>
            내가 내야할 금액 | <PriceText>{buyingPost?.pay}원</PriceText>
          </DescriptionBox>
          <MainTextBox>{buyingPost?.content}</MainTextBox>
        </ContentSection>
        <PostComment />
      </Main>
    </PostLayout>
  );
}

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
