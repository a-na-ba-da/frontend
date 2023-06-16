import React from 'react';
import styled from 'styled-components';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

import Button from '../../components/Button';
import Send from '../../asset/img/send.png';

const BuyingPost = () => {
  return (
    <PostLayout>
      <ImageBox></ImageBox>
      <Main>
        <HeaderSection>
          <HeaderUserBox>
            <HeaderUserImg>
              <AccountCircleTwoToneIcon sx={{ fontSize: 32 }} />
            </HeaderUserImg>
            <HeaderUserNameText>어두운 박쥐123</HeaderUserNameText>
          </HeaderUserBox>
          <Button />
        </HeaderSection>
        <ContentSection>
          <TitleBox>썬크림 1 + 1</TitleBox>
          <DateBox>2020.11.06</DateBox>
          <DescriptionBox>공구 날짜 | 2020.11.06</DescriptionBox>
          <DescriptionBox>전달 방법 | 대면</DescriptionBox>
          <DescriptionBox>
            내가 내야할 금액 | <PriceText>5,000원</PriceText>
          </DescriptionBox>
          <MainTextBox>
            올리브영 닥터지 썬크림 같이 사실분 구합니다.
          </MainTextBox>
        </ContentSection>
        <CommentSection>
          <SmsOutlinedIcon
            sx={{ fontSize: 16, color: '#216583', verticalAlign: 'middle' }}
          />
          <CommentCountText>2</CommentCountText>
          <CommentList>
            <CommentItem>
              <CommentUserBox>
                <CommentUserImg>
                  <AccountCircleTwoToneIcon sx={{ fontSize: 16 }} />
                </CommentUserImg>
                <CommentText>파란하늘932</CommentText>
              </CommentUserBox>
              <CommentDateText>2020.11.06</CommentDateText>
              <CommentText>저 살래요</CommentText>
            </CommentItem>
            <CommentItem>
              <CommentUserBox>
                <CommentUserImg>
                  <AccountCircleTwoToneIcon sx={{ fontSize: 16 }} />
                </CommentUserImg>
                <CommentText>파란하늘932</CommentText>
              </CommentUserBox>
              <CommentDateText>2020.11.06</CommentDateText>
              <CommentText>저 살래요</CommentText>
            </CommentItem>
          </CommentList>
        </CommentSection>
      </Main>
      <CommentInputSection>
        <CommentSendImg alt="cooment_send" src={Send} />
        <CommentInput placeholder="댓글을 입력하세요." />
      </CommentInputSection>
    </PostLayout>
  );
};

export default BuyingPost;

const PostLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ImageBox = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: #d9d9d9;
`;

const Main = styled.main`
  padding: 0 15px 200px 15px;
`;

const HeaderSection = styled.section`
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

const ContentSection = styled.section`
  padding: 15px 0;
`;

const TitleBox = styled.div`
  font-size: 22px;
`;

const DateBox = styled.div`
  color: #999999;
  font-size: 13px;
  padding: 5px 0 10px 0;
`;

const DescriptionBox = styled.div`
  color: #8f8f8f;
  font-size: 14px;
  padding: 3px 0;
`;

const MainTextBox = styled.div`
  font-size: 16px;
  padding: 15px 0;
`;

const PriceText = styled.span`
  color: #8f00ff;
  font-size: 16px;
  display: inline;
  vertical-align: middle;
`;

const CommentSection = styled.section``;

const CommentCountText = styled.span`
  color: #216583;
  font-size: 13px;
  margin-left: 5px;
`;

const CommentList = styled.ul`
  all: inherit;
  margin-top: 10px;
`;

const CommentItem = styled.li`
  all: inherit;
  position: relative;
  padding: 10px;
  margin: 0;
  &:first-child {
    border-top: 1px solid #e1e1e1;
  }
  &:not(:first-child) {
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
  }
`;

const CommentUserBox = styled.div`
  display: flex;
`;

const CommentUserImg = styled.div`
  margin-right: 5px;
`;

const CommentText = styled.span`
  font-size: 13px;
`;

const CommentDateText = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #999999;
  font-size: 13px;
`;

const CommentInputSection = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 56px;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommentSendImg = styled.img`
  position: absolute;
  right: 25px;
`;

const CommentInput = styled.input`
  box-sizing: border-box;
  padding-left: 10px;
  border: 1px solid #e7e7e7;
  border-radius: 7px;
  width: 100%;
  height: 34px;
  margin: 0 15px;
`;
