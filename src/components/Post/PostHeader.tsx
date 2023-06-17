import React from 'react';
import styled from 'styled-components';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

interface PostHeaderProps {
  children: React.ReactNode;
}

export default function PostHeader(props: PostHeaderProps) {
  return (
    <HeaderLayout>
      <HeaderUserBox>
        <HeaderUserImg>
          <AccountCircleTwoToneIcon sx={{ fontSize: 32 }} />
        </HeaderUserImg>
        <HeaderUserNameText>어두운 박쥐123</HeaderUserNameText>
      </HeaderUserBox>
      {props.children}
    </HeaderLayout>
  );
}

const HeaderLayout = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
  padding: 15px 0;
`;

const HeaderUserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderUserImg = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderUserNameText = styled.span`
  font-size: 18px;
`;
