import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

const SavingBoard = () => {
  const [isBuyingMenu, setIsBuyingMenu] = useState<boolean>(true);

  const handleClick = (whatMenu: string) => {
    if (whatMenu === 'buying') setIsBuyingMenu(true);
    else setIsBuyingMenu(false);
  };

  return (
    <SavingLayout>
      <Header />
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
