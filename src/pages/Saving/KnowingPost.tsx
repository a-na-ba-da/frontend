import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import PostBack from '../../components/Post/PostBack';
import Button from '../../components/Button';
import PostComment from '../../components/Post/PostComment';
import PostHeader from '../../components/Post/PostHeader';
import { getKnowingPost } from '../../api/saving';
import PostImgSlider from '../../components/Post/PostImgSlider';

export default function KnowingPost() {
  const { id } = useParams();
  const [knowingPost, setKnowingPost] = useState<knowingPostType>();

  useEffect(() => {
    getKnowingPost(id).then((res) => {
      console.log(res.data.detail);
      setKnowingPost(res.data.detail);
    });
  }, []);

  const handleClick = () => {
    if (knowingPost?.productUrl !== null) {
      const url: string | undefined = knowingPost?.productUrl;
      window.open(url, '_blank');
    }
  };

  return (
    <PostLayout>
      <PostBack color="white" whatShape="back" />
      <PostImgSlider images={knowingPost?.images} />
      <Main>
        {/* props.children으로 전달된 Button 컴포넌트를 헤더 내부에서 배치 */}
        <PostHeader userName={knowingPost?.writer?.nickname}>
          <Button content="쪽지 보내기" />
        </PostHeader>
        <ContentSection>
          <TitleBox>{knowingPost?.title}</TitleBox>
          <DateBox>
            {moment(knowingPost?.createdAt).format('YYYY.MM.DD hh:mm')}
          </DateBox>
          <DescriptionBox>
            {knowingPost?.isOnlineBought ? '온라인 · ' : '오프라인 · '}
            {knowingPost?.isOnlineBought ? (
              <span onClick={handleClick}>접속링크</span>
            ) : (
              `${knowingPost?.buyPlaceLat} ${knowingPost?.buyPlaceLng}`
            )}
          </DescriptionBox>
          <MainTextBox>{knowingPost?.content}</MainTextBox>
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
  font-size: 13px;
  color: #999999;
`;

const DescriptionBox = styled.div`
  padding: 3px 0;
  font-size: 14px;
  color: #8f8f8f;
`;

const MainTextBox = styled.div`
  padding: 15px 0;
  font-size: 16px;
`;
