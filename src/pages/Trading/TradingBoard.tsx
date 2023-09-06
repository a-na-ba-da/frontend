import React, { useEffect } from 'react';
import styled from 'styled-components';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

import Header from '../../components/Header/Header';
import Search from '../../components/Search';
import Footer from '../../components/Footer';
import HeaderRight from '../../components/Header/HeaderRight';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchTradingPostList } from '../../context/reducer/tradingReducer';
import baseURL from '../../api/basURL';

export default function TradingBoard() {
  const dispatch = useAppDispatch();
  const tradingPostList = useAppSelector((state) => state.trading.data);

  useEffect(() => {
    dispatch(fetchTradingPostList());
  }, []);

  return (
    <TradingLayout>
      <HeaderSection>
        <Header title="바꿔쓰기">
          <HeaderRight>
            <MessageOutlinedIcon />
          </HeaderRight>
        </Header>
        <Search />
      </HeaderSection>
      <ContentSection>
        <TotalCountSection>
          전체 <TotalCount>{tradingPostList.length}</TotalCount>건
        </TotalCountSection>
        <ContentList>
          {tradingPostList.map((post) => (
            <ContentItem>
              <ItemImg
                src={
                  post.images[0]
                    ? baseURL + '/image/' + 'thumbnail_' + post.images[0]
                    : undefined
                }
              />
              <ItemTitle>{post.name}</ItemTitle>
              <ItemPrice>{post.originalPrice}</ItemPrice>
            </ContentItem>
          ))}
        </ContentList>
      </ContentSection>
      <Footer pageName="trading" />
    </TradingLayout>
  );
}

const TradingLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const HeaderSection = styled.section`
  position: fixed;
  width: 100vw;
  background-color: white;
`;

const ContentSection = styled.section`
  padding: 150px 15px 79px 15px;
`;

const TotalCountSection = styled.div`
  font-size: 13px;
`;

const TotalCount = styled.strong`
  color: #8f00ff;
`;

const ContentList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  margin: 0;
  padding: 15px 0 0 0;
  justify-content: space-between;
`;

const ContentItem = styled.li`
  width: 150px;
  height: 225px;
  padding-bottom: 35px;
`;

const ItemImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;

const ItemTitle = styled.div`
  padding-top: 8px;
  font-size: 13px;
`;

const ItemPrice = styled.div`
  padding-top: 6px;
  font-size: 13px;
  color: #8f00ff;
`;

const AddBox = styled.div`
  overflow: hidden;
  position: fixed;
  right: 15px;
  bottom: 90px;
  border-radius: 50px;
`;
