import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Header from '../../components/Header/Header';
import Search from '../../components/Search';
import Footer from '../../components/Footer';
import HeaderRight from '../../components/Header/HeaderRight';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setScroll } from '../../context/reducer/sharingReducer';
import { fetchSharingPostList } from '../../context/reducer/sharingReducer';
import ContentSharingItem from '../../components/Content/ContentSharingItem';
import { setMenuType } from '../../context/reducer/menuReducer';

export default function SharingBoard() {
  const dispatch = useAppDispatch();
  const scroll = useAppSelector((state) => state.sharing.scroll);
  const SharingPostList = useAppSelector((state) => state.sharing.data);
  const navigate = useNavigate();

  const handle = () => {
    // 현재 스크롤을 추적
    dispatch(setScroll(window.scrollY));
  };

  useEffect(() => {
    dispatch(setMenuType('sharing'));
    dispatch(fetchSharingPostList());
    window.addEventListener('scroll', handle);
    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);

  useEffect(() => {
    // 게시글 목록 로드가 끝난뒤 저장된 이전 스크롤 수치를 적용
    window.scrollTo(0, scroll);
  }, [SharingPostList]);

  const goWrite = () => {
    navigate('/sharing/write');
  };

  return (
    <SharingLayout>
      {/* 
        props.children으로 전달된 컴포넌트를 헤더 내부에서 배치 
        HeaderRight로 감싸면 오른쪽에 배치
        HeaderLeft로 감싸면 왼쪽에 배치
      */}
      <HeaderSection>
        <Header title="나눠쓰기">
          <HeaderRight>
            <MessageOutlinedIcon onClick={() => navigate('/message')} />
          </HeaderRight>
        </Header>
        <Search />
      </HeaderSection>
      <ContentSection>
        <ContentList>
          {SharingPostList.map((post) => (
            <ContentSharingItem
              key={post.id}
              id={post.id}
              title={post.title}
              thumbnail={post.images.length > 0 && post.images[0]}
              start={post.start}
              end={post.end}
              pricePerDay={post.pricePerDay}
              commentCount={post.commentCount}
            />
          ))}
        </ContentList>
      </ContentSection>
      <AddBox onClick={goWrite}>
        <AddCircleIcon
          color="primary"
          sx={{ fontSize: 50, backgroundColor: 'white', display: 'block' }}
        />
      </AddBox>
      <Footer pageName="sharing" />
    </SharingLayout>
  );
}

const SharingLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const HeaderSection = styled.section`
  position: fixed;
  width: 100%;
  background-color: white;
`;

const ContentSection = styled.section`
  padding-top: 127px;
  padding-bottom: 79px;
`;

const ContentList = styled.ul`
  all: unset;
  display: flex;
  padding: 0 15px;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  & :last-child {
    border: 0;
  }
`;

const AddBox = styled.div`
  position: fixed;
  bottom: 90px;
  right: 15px;
  border-radius: 50px;
  overflow: hidden;
`;
