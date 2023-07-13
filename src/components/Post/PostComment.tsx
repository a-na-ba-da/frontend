import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

import Send from '../../asset/img/send.png';
import { getComment } from '../../api/comment';

interface PostCommentProps {
  postType: string;
  postId: number | undefined;
}

export default function PostComment({ postType, postId }: PostCommentProps) {
  interface parentCommentType {
    createdAt: string;
    modifiedAt: string;
    id: number;
    writer: writerType;
    content: string;
  }

  interface commentType {
    parentComment: parentCommentType;
    childComments: parentCommentType[];
  }
  const [commentList, setCommentList] = useState<commentType[]>([]);

  useEffect(() => {
    if (postId) {
      getComment(postType, postId).then((res) => {
        setCommentList(res.data.detail);
      });
    }
  }, [postId]);

  return (
    <CommentLayout>
      <SmsOutlinedIcon
        sx={{ fontSize: 16, color: '#216583', verticalAlign: 'middle' }}
      />
      <CommentCountText>2</CommentCountText>
      <CommentList>
        {commentList.map((item) => (
          <CommentItem>
            <CommentUserBox>
              <CommentUserImg>
                <AccountCircleTwoToneIcon sx={{ fontSize: 16 }} />
              </CommentUserImg>
              <CommentText>{item.parentComment.writer.nickname}</CommentText>
            </CommentUserBox>
            <CommentText>{item.parentComment.content}</CommentText>
            <CommentDateBox>{item.parentComment.createdAt}</CommentDateBox>
            <ChildCommentBtnBox>
              <SmsOutlinedIcon
                sx={{ fontSize: 13, color: '#b7b7b7', verticalAlign: 'middle' }}
              />
            </ChildCommentBtnBox>
          </CommentItem>
        ))}
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
  margin-left: 5px;
  color: #216583;
  font-size: 13px;
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
    border-bottom: 1px solid #e1e1e1;
  }
  &:not(:first-child) {
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

const CommentDateBox = styled.div`
  margin-top: 5px;
  font-size: 10px;
  color: #999999;
`;

const ChildCommentBtnBox = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: #f9f9f9;
  padding: 0 10px;
  border-radius: 3px;
`;

const CommentInputSection = styled.section`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: #fbfbfb;
  align-items: center;
  justify-content: center;
`;

const CommentSendImg = styled.img`
  position: absolute;
  right: 25px;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 34px;
  margin: 0 15px;
  padding-left: 10px;
  border: 1px solid #e7e7e7;
  border-radius: 7px;
  box-sizing: border-box;
`;
