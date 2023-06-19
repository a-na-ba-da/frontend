import React from 'react';
import styled from 'styled-components';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface ContentKnowingItemProps {
  id: number;
  title: string;
  date: string;
}

export default function ContentKnowingItem({
  id,
  title,
  date,
}: ContentKnowingItemProps) {
  const navigate: NavigateFunction = useNavigate();

  const goPost = () => {
    navigate(`/saving/knowing/${id}`);
  };

  return (
    <ItemLayout onClick={goPost}>
      <ThumbnailCol></ThumbnailCol>
      <DescriptionCol>
        <div>
          <TitleText>{title}</TitleText>
          <DateText>{date}</DateText>
        </div>
        <ChatBox>
          <SmsOutlinedIcon fontSize="small" />
          <ChatCountText>2</ChatCountText>
        </ChatBox>
      </DescriptionCol>
    </ItemLayout>
  );
}

const ItemLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 15px 0;
  border-bottom: solid 1px #e1e1e1;
`;

const ThumbnailCol = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

const DescriptionCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 5px 10px;
  flex-grow: 1;
`;

const TitleText = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
`;

const DateText = styled.div`
  font-size: 13px;
  color: #999999;
`;

const ChatBox = styled.div`
  display: flex;
  justify-content: right;
`;

const ChatCountText = styled.span`
  font-size: 13px;
  margin-left: 5px;
  padding-top: 1px;
`;
