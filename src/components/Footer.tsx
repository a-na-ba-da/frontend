import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterLayout>
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
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.footer`
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
