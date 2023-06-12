import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <ContentLayout>
      <ContentItem>
        <ThumbnailCol></ThumbnailCol>
        <DescriptionCol>
          <TitleText>썬크림 1 + 1</TitleText>
          <DateText>2020.11.06 | 비대면</DateText>
          <PriceText>5,000원</PriceText>
          <ChatBox>
            <QuestionAnswerOutlinedIcon fontSize="small" />
            <ChatCountText>2</ChatCountText>
          </ChatBox>
        </DescriptionCol>
      </ContentItem>
    </ContentLayout>
  );
};

export default Content;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  height: calc(100vh - 179px);
`;

const ContentItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 20px 0;
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
`;
