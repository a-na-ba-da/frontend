import React from 'react';
import styled from 'styled-components';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import RecyclingIcon from '@mui/icons-material/Recycling';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';

const UNSELECTEDCOLOR = '#a3a1a2';
// const SELECTEDCOLOR = '#8f00ff';

const Footer = () => {
  return (
    <FooterLayout>
      <NavItem>
        <HandshakeOutlinedIcon sx={{ fontSize: 32, color: UNSELECTEDCOLOR }} />
        <NavText>아껴쓰기</NavText>
      </NavItem>
      <NavItem>
        <ViewInArIcon sx={{ fontSize: 32, color: UNSELECTEDCOLOR }} />
        <NavText>나눠쓰기</NavText>
      </NavItem>
      <NavItem>
        <SyncAltOutlinedIcon sx={{ fontSize: 32, color: UNSELECTEDCOLOR }} />
        <NavText>바꿔쓰기</NavText>
      </NavItem>
      <NavItem>
        <RecyclingIcon sx={{ fontSize: 32, color: UNSELECTEDCOLOR }} />
        <NavText>다시쓰기</NavText>
      </NavItem>
      <NavItem>
        <AccountCircleOutlinedIcon
          sx={{ fontSize: 32, color: UNSELECTEDCOLOR }}
        />
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

const NavText = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: #a3a1a2;
`;
