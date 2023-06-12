import React from 'react';
import styled from 'styled-components';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderBox>
        <HeaderText>아껴쓰기</HeaderText>
        <HeaderMessage>
          <MessageOutlinedIcon />
        </HeaderMessage>
      </HeaderBox>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.header`
  top: 0;
  width: 100%;
`;

const HeaderBox = styled.div`
  position: relative;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.span`
  font-size: 18px;
`;

const HeaderMessage = styled.div`
  position: absolute;
  right: 30px;
`;
