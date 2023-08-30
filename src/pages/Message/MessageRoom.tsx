import React, { KeyboardEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/Header/HeaderLeft';
import PostBack from '../../components/Post/PostBack';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setInit } from '../../context/reducer/buyingEditReducer';
import {
  fetchMessageRoomItem,
  initData,
} from '../../context/reducer/messageReducer';
import { createMessage } from '../../api/message';

export default function MessageRoom() {
  const id = Number(useParams().id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState<string>('');
  const [isKeyDown, setIsKeyDown] = useState(false);
  const postType = useAppSelector((state) => state.message.postType);
  const postId = useAppSelector((state) => state.message.postId);
  const interlocutorNickname = useAppSelector(
    (state) => state.message.interlocutorNickname,
  );
  const data = useAppSelector((state) => state.message.data);

  const handleCancelClick = () => {
    dispatch(setInit());
    navigate(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && !isKeyDown) {
      setIsKeyDown(true);
      if (keyword.length > 1) {
        createMessage(postType, postId, keyword).then(() => {
          console.log('send');
          dispatch(fetchMessageRoomItem(id));
        });
      }
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsKeyDown(false);
    }
  };

  useEffect(() => {
    if (id > 0) {
      dispatch(fetchMessageRoomItem(id));
      console.log(id);
    } else {
      dispatch(initData());
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

  console.log(data, postType, postId, interlocutorNickname, id);

  return (
    <MessageRoomLayout>
      <Header title={interlocutorNickname}>
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
      <InputSection>
        <Input
          placeholder="쪽지를 입력하세요"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        />
        <SendImg>
          <SearchIcon style={{ verticalAlign: 'middle' }} />
        </SendImg>
      </InputSection>
    </MessageRoomLayout>
  );
}

const MessageRoomLayout = styled.div`
  display: flex;
  flex-direction: column;
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
  flex-grow: 1;
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

const InputSection = styled.section`
  display: flex;
  position: relative;
  bottom: 0;
  height: 50px;
  padding: 0 15px;
  background-color: #fbfbfb;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 34px;
  padding-left: 10px;
  border: solid 1px #e7e7e7;
  border-radius: 5px;
  background-color: white;
  box-sizing: border-box;
`;

const SendImg = styled.div`
  position: absolute;
  right: 20px;
`;
