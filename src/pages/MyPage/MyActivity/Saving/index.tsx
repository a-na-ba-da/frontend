import React, { useEffect } from 'react';
import styled from 'styled-components';

import PostBack from '../../../../components/Post/PostBack';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setMenuType } from '../../../../context/reducer/menuReducer';
import { setScroll } from '../../../../context/reducer/savingReducer';

export default function MySavingActivity() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.mypage.data.saves);
  const menuType = useAppSelector((state) => state.menu.menuType);
  const scroll = useAppSelector((state) => state.saving.scroll);
  const myBuyingPostList: Array<object> = [];
  const myKnowingPostList: Array<object> = [];

  {
    data.map((post: any) => {
      if (post.type === 'BUY_TOGETHER') {
        myBuyingPostList.push(post);
      }
      if (post.type === 'KNOW_TOGETHER') {
        myKnowingPostList.push(post);
      }
    });
  }

  const handle = () => {
    dispatch(setScroll(window.scrollY));
  };

  useEffect(() => {
    if (menuType === '') dispatch(setMenuType('buying'));
    window.addEventListener('scroll', handle);
    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, scroll);
  }, [myBuyingPostList, myKnowingPostList]);

  const handleMenuClick = (menu: string) => {
    if (
      (menu === 'buying' && menuType === 'buying') ||
      (menu === 'knowing' && menuType === 'knowing')
    )
      window.scrollTo({ top: 0, behavior: 'smooth' });
    if (menu === 'buying') {
      dispatch(setMenuType('buying'));
      window.scrollTo({ top: 0 });
    }
    if (menu === 'knowing') {
      dispatch(setMenuType('knowing'));
      window.scrollTo({ top: 0 });
    }
  };

  console.log(data);
  console.log(myBuyingPostList);
  console.log(myKnowingPostList);

  return (
    <MyActivityLayout>
      <HeaderWrapper>
        <Header>
          <PostBackWrapper>
            <PostBack color="#8f00ff" shape="back" />
          </PostBackWrapper>
          나의 아껴쓰기
        </Header>
        <MenuCol
          onClick={() => handleMenuClick('buying')}
          isBuyingMenu={menuType === 'buying'}
        >
          같이 사요
        </MenuCol>
        <MenuCol
          onClick={() => handleMenuClick('knowing')}
          isBuyingMenu={menuType === 'knowing'}
        >
          같이 알아요
        </MenuCol>
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
