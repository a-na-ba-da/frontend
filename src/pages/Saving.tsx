import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Search from '../components/Search';
import Content from '../components/Content';

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
      <Footer>
        <NavItem>
          <NavImg></NavImg>
          <NavText>아껴쓰기</NavText>
        </NavItem>
        <NavItem>
          <NavImg></NavImg>
          <NavText>나눠쓰기</NavText>
        </NavItem>
        <NavItem>
          <NavImg></NavImg>
          <NavText>바꿔쓰기</NavText>
        </NavItem>
        <NavItem>
          <NavImg></NavImg>
          <NavText>다시쓰기</NavText>
        </NavItem>
        <NavItem>
          <NavImg></NavImg>
          <NavText>마이페이지</NavText>
        </NavItem>
      </Footer>
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

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 78px;
  border-top: solid 1px #f0f0f0;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavImg = styled.div`
  width: 32px;
  height: 32px;
  background-color: #999999;
`;

const NavText = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;
