import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

import PostBack from '../../components/Post/PostBack';
import Button from '../../components/Button';
import PostComment from '../../components/Post/PostComment';
import PostHeader from '../../components/Post/PostHeader';
import { getRecyclingPost } from '../../api/recycling';
import PostImgSlider from '../../components/Post/PostImgSlider';
import { handleMsgSendClick } from '../../utils/messageUtils';
import { useAppDispatch } from '../../hooks/redux';

export default function RecyclingPost() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [recyclingPost, setRecyclingPost] = useState<recyclingPostType>();

  useEffect(() => {
    getRecyclingPost(id).then((res) => {
      setRecyclingPost(res.data.detail);
    });
  }, []);

  return (
    <PostLayout>
      <PostBack color="white" shape="back" />
      <PostImgSlider images={recyclingPost?.images} />
      <Main>
        {/* props.children으로 전달된 Button 컴포넌트를 헤더 내부에서 배치 */}
        <PostHeader userName={recyclingPost?.writer?.nickname}>
          <Button
            content="쪽지 보내기"
            onClick={() =>
              handleMsgSendClick(dispatch, navigate, 'RECYCLE', recyclingPost)
            }
          />
        </PostHeader>
        <ContentSection>
          <TitleBox>{recyclingPost?.title}</TitleBox>
          <DateBox>
            {moment(recyclingPost?.createdAt).format('YYYY.MM.DD hh:mm')}
          </DateBox>
          <MainTextBox>{recyclingPost?.content}</MainTextBox>
        </ContentSection>
        <PostComment postType="recycle" postId={recyclingPost?.id} />
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
  font-size: 13px;
  color: #999999;
`;

const MainTextBox = styled.div`
  font-size: 16px;
  padding: 15px 0;
`;
