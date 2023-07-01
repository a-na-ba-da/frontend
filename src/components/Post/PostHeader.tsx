import React from 'react';
import styled from 'styled-components';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

interface PostHeaderProps {
  children: React.ReactNode;
  userName: string | undefined;
}

export default function PostHeader(props: PostHeaderProps) {
  return (
    <HeaderLayout>
      <HeaderUserBox>
        <HeaderUserImg>
          <AccountCircleTwoToneIcon sx={{ fontSize: 32 }} />
        </HeaderUserImg>
        <HeaderUserNameText>{props.userName}</HeaderUserNameText>
      </HeaderUserBox>
      {props.children}
    </HeaderLayout>
  );
}

const HeaderLayout = styled.section`
  display: flex;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #f3f3f3;
  justify-content: space-between;
  align-items: center;
`;

const HeaderUserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderUserImg = styled.div`
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

const HeaderUserNameText = styled.span`
  font-size: 18px;
`;
