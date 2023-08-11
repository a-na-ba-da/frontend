import React from 'react';
import styled from 'styled-components';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import RecyclingIcon from '@mui/icons-material/Recycling';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import { useNavigate } from 'react-router-dom';

const UNSELECTEDCOLOR = '#a3a1a2';
const SELECTEDCOLOR = '#8f00ff';

interface FooterProps {
  pageName: string;
}

export default function Footer({ pageName }: FooterProps) {
  const navigate = useNavigate();

  return (
    <FooterLayout>
      <NavItem onClick={() => navigate('/saving')}>
        <HandshakeOutlinedIcon
          sx={{
            fontSize: 32,
            color: pageName === 'saving' ? SELECTEDCOLOR : UNSELECTEDCOLOR,
          }}
        />
        <NavText isSelected={pageName === 'saving'}>아껴쓰기</NavText>
      </NavItem>
      <NavItem onClick={() => navigate('/sharing')}>
        <ViewInArIcon
          sx={{
            fontSize: 32,
            color: pageName === 'sharing' ? SELECTEDCOLOR : UNSELECTEDCOLOR,
          }}
        />
        <NavText isSelected={pageName === 'sharing'}>나눠쓰기</NavText>
      </NavItem>
      <NavItem>
        <SyncAltOutlinedIcon
          sx={{
            fontSize: 32,
            color: pageName === 'trading' ? SELECTEDCOLOR : UNSELECTEDCOLOR,
          }}
        />
        <NavText isSelected={pageName === 'trading'}>바꿔쓰기</NavText>
      </NavItem>
      <NavItem>
        <RecyclingIcon
          sx={{
            fontSize: 32,
            color: pageName === 'recycling' ? SELECTEDCOLOR : UNSELECTEDCOLOR,
          }}
        />
        <NavText isSelected={pageName === 'recycling'}>다시쓰기</NavText>
      </NavItem>
      <NavItem>
        <AccountCircleOutlinedIcon
          sx={{
            fontSize: 32,
            color: pageName === 'mypage' ? SELECTEDCOLOR : UNSELECTEDCOLOR,
          }}
        />
        <NavText isSelected={pageName === 'mypage'}>마이페이지</NavText>
      </NavItem>
    </FooterLayout>
  );
}

const FooterLayout = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 78px;
  border-top: solid 1px #f0f0f0;
  background-color: white;
  justify-content: space-around;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavText = styled.div<{ isSelected: boolean }>`
  margin-top: 5px;
  font-size: 12px;
  color: ${(props) => (props.isSelected ? '#8f00ff' : '#a3a1a2')};
`;
