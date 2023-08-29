import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/Header/HeaderLeft';
import PostBack from '../../components/Post/PostBack';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setInit } from '../../context/reducer/buyingEditReducer';
import { fetchMessageRoomItem } from '../../context/reducer/messageReducer';

export default function MessageRoom() {
  const id: number = useParams().id ? Number(useParams().id) : 0;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.message.data);

  const handleCancelClick = () => {
    dispatch(setInit());
    navigate(-1);
  };

  useEffect(() => {
    if (id > 0) {
      dispatch(fetchMessageRoomItem(id));
      console.log(id);
    }
  }, [id]);

  const convertSentWhoToData = (sentWho: string) => {
    switch (sentWho) {
      case 'NOTIFICATION':
        return {
          text: '안내',
          color: '#8d8d8d',
        };
      case 'ME':
        return {
          text: '나',
          color: '#f76262',
        };
      case 'INTERLOCUTOR':
        return {
          text: data.interlocutor.nickname,
          color: '#216583',
        };
      default:
        return {
          text: '',
          color: '',
        };
    }
  };

  console.log(data);

  return (
    <MessageRoomLayout>
      <Header title={data.interlocutor ? data.interlocutor.nickname : ''}>
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
        <MessageList>
          {data.messages?.map((item) => (
            <MessageItem key={item.id}>
              <ItemHeaderBox>
                <SentWhoBox color={convertSentWhoToData(item.sentWho)['color']}>
                  {convertSentWhoToData(item.sentWho)['text']}
                </SentWhoBox>
                <SentAtBox>{item.sentAt}</SentAtBox>
              </ItemHeaderBox>
              <ContentBox>{item.message}</ContentBox>
            </MessageItem>
          ))}
        </MessageList>
      </Main>
    </MessageRoomLayout>
  );
}

const MessageRoomLayout = styled.div`
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

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MessageItem = styled.li`
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

const SentWhoBox = styled.div<{ color: string }>`
  color: ${(state) => state.color};
`;

const SentAtBox = styled.div`
  font-size: 13px;
  color: #8f8f8f;
`;

const ContentBox = styled.div``;
