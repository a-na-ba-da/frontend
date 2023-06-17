import React from 'react';
import styled from 'styled-components';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

import Send from '../../asset/img/send.png';

export default function PostComment() {
  return (
    <CommentLayout>
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
      <CommentInputSection>
        <CommentSendImg alt="cooment_send" src={Send} />
        <CommentInput placeholder="댓글을 입력하세요." />
      </CommentInputSection>
    </CommentLayout>
  );
}

const CommentLayout = styled.section``;

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
  left: 0;
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
