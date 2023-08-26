import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/Header/HeaderLeft';
import PostBack from '../../components/Post/PostBack';
import { useAppDispatch } from '../../hooks/redux';
import { setInit } from '../../context/reducer/buyingEditReducer';

export default function MessageMain() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCancelClick = () => {
    dispatch(setInit());
    navigate(-1);
  };

  return (
    <BuyingPostEditLayout>
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
      <Main></Main>
    </BuyingPostEditLayout>
  );
}

const BuyingPostEditLayout = styled.div`
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
