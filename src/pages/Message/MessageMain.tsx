import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/Header/HeaderLeft';
import PostBack from '../../components/Post/PostBack';
import { useAppDispatch } from '../../hooks/redux';
import { setInit } from '../../context/reducer/buyingEditReducer';
import { getMessageRoomList } from '../../api/message';

export default function MessageMain() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [MsgRoomList, setMsgRoomList] = useState<messageRoomSummaryType[]>([]);

  const handleCancelClick = () => {
    dispatch(setInit());
    navigate(-1);
  };

  useEffect(() => {
    getMessageRoomList().then((res) => {
      setMsgRoomList(res.data.detail);
    });
  }, []);

  return (
    <MessageMainLayout>
      <Header title="쪽지함">
        <HeaderLeft>
          <PostBack
            color="#8F00FF"
            whatShape="arrow"
            onClick={handleCancelClick}
          />
        </HeaderLeft>
      </Header>
      <Line />
      <Main>
        <MessageRoomList>
          {MsgRoomList.map((item) => (
            <MessageRoomItem key={item.messageRoomId}>
              <ItemHeaderBox>
                <InterlocutorBox>{item.interlocutor.nickname}</InterlocutorBox>
                <LastMessageAtBox>{item.lastMessagedAt}</LastMessageAtBox>
              </ItemHeaderBox>
              <LastMessageBox>{item.lastMessage}</LastMessageBox>
            </MessageRoomItem>
          ))}
        </MessageRoomList>
      </Main>
    </MessageMainLayout>
  );
}

const MessageMainLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Line = styled.hr`
  height: 1px;
  margin: 0;
  border: 0;
  background: #eaeaeb;
`;

const Main = styled.main`
  padding: 0 15px;
`;

const MessageRoomList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MessageRoomItem = styled.li`
  padding: 12px;
  border-bottom: 1px solid #f3f3f3;
  font-size: 15px;
`;

const ItemHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const InterlocutorBox = styled.div``;

const LastMessageAtBox = styled.div`
  font-size: 13px;
  color: #8f8f8f;
`;

const LastMessageBox = styled.div``;
