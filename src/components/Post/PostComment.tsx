import React, { useEffect, useState, KeyboardEvent } from 'react';
import styled from 'styled-components';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';

import Send from '../../asset/img/send.png';
import { createComment, getComment } from '../../api/comment';

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
  const [commentInput, setCommentInput] = useState<string>('');

  useEffect(() => {
    if (postId) {
      getComment(postType, postId).then((res) => {
        setCommentList(res.data.detail);
      });
    }
  }, [postId]);

  const handleSendClick = async () => {
    await createComment(postType, postId, commentInput);
    const res = await getComment(postType, postId);
    setCommentList(res.data.detail);
    setCommentInput('');
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendClick();
    }
  };

  const ChildComment = ({ writer, content, createdAt }: parentCommentType) => {
    return (
      <ChildCommentLayout>
        <TurnLeftIcon
          sx={{
            marginTop: '10px',
            color: '#999999',
            transform: 'rotate( 180deg )',
          }}
        />
        <ChildCommentSection>
          <ChildCommentBox>
            <CommentUserBox>
              <CommentUserImg>
                <AccountCircleTwoToneIcon sx={{ fontSize: 16 }} />
              </CommentUserImg>
              <CommentText>{writer.nickname}</CommentText>
            </CommentUserBox>
            <CommentText>{content}</CommentText>
            <CommentDateBox>{createdAt}</CommentDateBox>
          </ChildCommentBox>
        </ChildCommentSection>
      </ChildCommentLayout>
    );
  };

  return (
    <section>
      <SmsOutlinedIcon
        sx={{ fontSize: 16, color: '#216583', verticalAlign: 'middle' }}
      />
      <CommentCountText>2</CommentCountText>
      <CommentList>
        {commentList.map((item) => (
          <CommentItem>
            <CommentBox>
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
                  sx={{
                    fontSize: 13,
                    color: '#b7b7b7',
                    verticalAlign: 'middle',
                  }}
                />
              </ChildCommentBtnBox>
            </CommentBox>
            {item.childComments.map((child) => ChildComment(child))}
          </CommentItem>
        ))}
      </CommentList>
      <CommentInputSection>
        <CommentSendImg
          alt="cooment_send"
          src={Send}
          onClick={handleSendClick}
        />
        <CommentInput
          placeholder="댓글을 입력하세요."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </CommentInputSection>
    </section>
  );
}

const CommentItem = styled.li`
  padding-bottom: 5px;
  list-style: none;
  &:first-child {
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }
  &:not(:first-child) {
    border-bottom: 1px solid #f2f2f2;
  }
  &:last-child {
    border-bottom: 0;
  }
`;

const CommentCountText = styled.span`
  margin-left: 5px;
  font-size: 13px;
  color: #216583;
`;

const CommentList = styled.ul`
  all: inherit;
  margin-top: 10px;
`;

const CommentBox = styled.div`
  position: relative;
  padding: 10px;
  margin: 0;
`;

const ChildCommentBox = styled(CommentBox)`
  margin: 5px 0 5px 5px;
  border-radius: 10px;
  background-color: #f9f9f9;
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
  padding: 0 10px;
  border-radius: 3px;
  background-color: #f9f9f9;
`;

const ChildCommentLayout = styled.div`
  display: flex;
`;

const ChildCommentSection = styled.div`
  flex-grow: 1;
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
