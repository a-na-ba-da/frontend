import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Header from '../../components/Header/Header';
import Search from '../../components/Search';
import Footer from '../../components/Footer';
import HeaderRight from '../../components/Header/HeaderRight';
import ContentBuyingItem from '../../components/Content/ContentBuyingItem';
import ContentKnowingItem from '../../components/Content/ContentKnowingItem';
import { getBuyingPostList, getKnowingPostList } from '../../api/saving';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsBuyingMenu } from '../../context/reducer/buyingReducer';

export default function SavingBoard() {
  const dispatch = useAppDispatch();
  const isBuyingMenu = useAppSelector((state) => state.buying.isBuyingMenu);
  const [buyingPostList, setBuyingPostList] = useState<buyingPostType[]>([]);
  const [knowingPostList, setKnowingPostList] = useState<knowingPostType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isBuyingMenu) {
      getBuyingPostList().then((res) => {
        setBuyingPostList(res.data.detail.content);
      });
    } else {
      getKnowingPostList().then((res) => {
        setKnowingPostList(res.data.detail.content);
      });
    }
  }, [isBuyingMenu]);

  const goWrite = () => {
    isBuyingMenu
      ? navigate('/saving/buying/write')
      : navigate('/saving/knowing/write');
  };

  const handleClick = (whatMenu: string) => {
    // 현재 선택된 메뉴를 또 클릭시 smooth한 스크롤로 최상단 이동
    if (
      (whatMenu === 'buying' && isBuyingMenu) ||
      (whatMenu === 'knowing' && !isBuyingMenu)
    )
      window.scrollTo({ top: 0, behavior: 'smooth' });
    // 현재 선택되지 않은 메뉴를 클릭시 메뉴 전환 후 스크롤 최상단 이동
    // 전환후 최상단 스크롤 이동이 없을 경우 이전 메뉴의 스크롤이 전환 후 메뉴 스크롤에도 남게됨
    else if (whatMenu === 'buying') {
      dispatch(setIsBuyingMenu(true));
      window.scrollTo({ top: 0 });
    } else {
      dispatch(setIsBuyingMenu(false));
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <SavingLayout>
      {/* 
        props.children으로 전달된 컴포넌트를 헤더 내부에서 배치 
        HeaderRight로 감싸면 오른쪽에 배치
        HeaderLeft로 감싸면 왼쪽에 배치
      */}
      <HeaderSection>
        <Header title="아껴쓰기">
          <HeaderRight>
            <MessageOutlinedIcon />
          </HeaderRight>
        </Header>
        <Search />
        <MenuCol
          onClick={() => handleClick('buying')}
          isBuyingMenu={isBuyingMenu}
        >
          같이 사요
        </MenuCol>
        <MenuCol
          onClick={() => handleClick('knowing')}
          isBuyingMenu={!isBuyingMenu}
        >
          같이 알아요
        </MenuCol>
      </HeaderSection>
      <ContentSection>
        <ContentList>
          {isBuyingMenu
            ? buyingPostList.map((post) => (
                <ContentBuyingItem
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  thumbnail={post.images.length > 0 && post.images[0]}
                  date={post.createdAt}
                  isOnline={post.parcelDelivery}
                  price={post.pay}
                />
              ))
            : knowingPostList.map((post) => (
                <ContentKnowingItem
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  thumbnail={post.images.length > 0 && post.images[0]}
                  date={post.createdAt}
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
      <Footer pageName="saving" />
    </SavingLayout>
  );
}

const SavingLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const HeaderSection = styled.section`
  position: fixed;
  background-color: white;
`;

const ContentSection = styled.section`
  padding-top: 177px;
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

interface MenuColProps {
  isBuyingMenu: boolean;
}

const MenuCol = styled.div<MenuColProps>`
  display: inline-flex;
  width: calc(100vw / 2);
  height: 50px;
  border-bottom: ${(props) =>
    props.isBuyingMenu ? '2px solid #8f00ff' : null};
  font-size: 15px;
  justify-content: center;
  align-items: center;
`;

const AddBox = styled.div`
  position: fixed;
  bottom: 90px;
  right: 15px;
  border-radius: 50px;
  overflow: hidden;
`;
