import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Search from '../components/Search';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Saving = () => {
  return (
    <SavingLayout>
      <Header />
      <Main>
        <Search />
        <MenuCol>같이 사요</MenuCol>
        <MenuCol>같이 알아요</MenuCol>
        <Content />
      </Main>
      <Footer />
    </SavingLayout>
  );
};

export default Saving;

const SavingLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main``;

const MenuCol = styled.div`
  font-size: 15px;
  border-bottom: solid 2px #8f00ff;
  display: inline-flex;
  width: calc(100vw / 2);
  height: 50px;
  justify-content: center;
  align-items: center;
`;
