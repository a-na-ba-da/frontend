import React from 'react';
import styled from 'styled-components';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

interface ContentBuyingItemProps {
  title: string;
  date: string;
  isOnline: boolean;
  price: number;
}

export default function ContentBuyingItem({
  title,
  date,
  isOnline,
  price,
}: ContentBuyingItemProps) {
  return (
    <ItemLayout>
      <ThumbnailCol></ThumbnailCol>
      <DescriptionCol>
        <TitleText>{title}</TitleText>
        <DateText>
          {date} | {isOnline ? '비대면' : '대면'}
        </DateText>
        <PriceText>{price}원</PriceText>
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
`;

const DateText = styled.div`
  font-size: 13px;
  color: #999999;
`;

const PriceText = styled.div`
  font-size: 15px;
  color: #8f00ff;
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
