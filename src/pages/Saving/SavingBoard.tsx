import React, { useState } from 'react';
import styled from 'styled-components';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

import Header from '../../components/Header/Header';
import Search from '../../components/Search';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import HeaderRight from '../../components/Header/HeaderRight';

const SavingBoard = () => {
  const [isBuyingMenu, setIsBuyingMenu] = useState<boolean>(true);

  const handleClick = (whatMenu: string) => {
    if (whatMenu === 'buying') setIsBuyingMenu(true);
    else setIsBuyingMenu(false);
  };

  return (
    <SavingLayout>
      {/* 
        props.children으로 전달된 컴포넌트를 헤더 내부에서 배치 
        HeaderRight로 감싸면 오른쪽에 배치
        HeaderLeft로 감싸면 왼쪽에 배치
      */}
      <Header title="아껴쓰기">
        <HeaderRight>
          <MessageOutlinedIcon />
        </HeaderRight>
      </Header>
      <Main>
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
        <Content />
      </Main>
      <Footer />
    </SavingLayout>
  );
};

export default SavingBoard;

const SavingLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main``;

interface MenuColProps {
  isBuyingMenu: boolean;
}

const MenuCol = styled.div<MenuColProps>`
  font-size: 15px;
  border-bottom: ${(props) =>
    props.isBuyingMenu ? '2px solid #8f00ff' : null};
  display: inline-flex;
  width: calc(100vw / 2);
  height: 50px;
  justify-content: center;
  align-items: center;
`;
