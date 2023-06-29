import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import PostBack from '../../components/Post/PostBack';
import Button from '../../components/Button';
import PostComment from '../../components/Post/PostComment';
import PostHeader from '../../components/Post/PostHeader';
import { getBuyingPost } from '../../api/saving';
import PostImgSlider from '../../components/Post/PostImgSlider';

export default function BuyingPost() {
  const { id } = useParams();
  const [buyingPost, setBuyingPost] = useState<buyingPostType>();

  useEffect(() => {
    getBuyingPost(id).then((res) => {
      console.log(res.data.detail);
      setBuyingPost(res.data.detail);
    });
  }, []);

  return (
    <PostLayout>
      <PostBack color="white" whatShape="back" />
      <PostImgSlider images={buyingPost?.images} />
      <Main>
        {/* props.children으로 전달된 Button 컴포넌트를 헤더 내부에서 배치 */}
        <PostHeader userName={buyingPost?.writer?.nickname}>
          <Button content="쪽지 보내기" />
        </PostHeader>
        <ContentSection>
          <TitleBox>{buyingPost?.title}</TitleBox>
          <DateBox>
            {moment(buyingPost?.createdAt).format('YYYY.MM.DD hh:mm')}
          </DateBox>
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
  padding: 5px 0 10px 0;
  color: #999999;
  font-size: 13px;
`;

const DescriptionBox = styled.div`
  padding: 3px 0;
  color: #8f8f8f;
  font-size: 14px;
`;

const MainTextBox = styled.div`
  font-size: 16px;
  padding: 15px 0;
`;

const PriceText = styled.span`
  display: inline;
  color: #8f00ff;
  font-size: 16px;
  vertical-align: middle;
`;
