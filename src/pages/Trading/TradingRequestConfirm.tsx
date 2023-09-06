import React from 'react';
import styled from 'styled-components';

import PostBack from '../../components/Post/PostBack';
import UserIcon from '../../asset/img/user-icon.png';

export default function TradingRequestConfirm() {
  return (
    <>
      <Top>
        <PostBackBox>
          <PostBack color="black" whatShape="back" />
        </PostBackBox>
        <Title>바꾸기 확인</Title>
      </Top>
      <OpponentProductLayout>
        <OpponentInfoLayout>
          <UserIconBox>
            <img src={UserIcon} />
          </UserIconBox>
          <UsernameBox>금토끼가내토끼다</UsernameBox>
          <UserProductCountBox>1개 선택됨 | 총 10,000원</UserProductCountBox>
        </OpponentInfoLayout>
        <OpponentProductWrapper>
          <OpponentProductList>
            <OpponentProductItem>
              <OpponentProductImg />
              <OpponentProductInfo>
                <OpponentProductTitle>
                  [아크네켓] 칼라민 선크림 화장품
                </OpponentProductTitle>
                <OpponentProductPrice>정가 | 10,000</OpponentProductPrice>
              </OpponentProductInfo>
            </OpponentProductItem>
          </OpponentProductList>
        </OpponentProductWrapper>
      </OpponentProductLayout>
      <MyProductLayout>
        <MyInfoLayout>
          <UserIconBox>
            <img src={UserIcon} />
          </UserIconBox>
          <UsernameBox>내 상품</UsernameBox>
          <UserProductCountBox>1개 선택됨 | 총 10,000원</UserProductCountBox>
        </MyInfoLayout>
        <MyProductWrapper>
        <OpponentProductList>
            <OpponentProductItem>
              <OpponentProductImg />
              <OpponentProductInfo>
                <OpponentProductTitle>
                  [아크네켓] 칼라민 선크림 화장품
                </OpponentProductTitle>
                <OpponentProductPrice>정가 | 10,000</OpponentProductPrice>
              </OpponentProductInfo>
            </OpponentProductItem>
          </OpponentProductList>
        </MyProductWrapper>
      </MyProductLayout>
      <TradeBtnLayout>바꾸기 신청</TradeBtnLayout>
    </>
  );
}

const Top = styled.div`
  width: 100vw;
  height: 60px;
`;

const PostBackBox = styled.div`
  position: absolute;
  top: -6px;
`;

const Title = styled.div`
  display: flex;
  height: 60px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;

const OpponentProductLayout = styled.div`
  height: calc((100vh - 120px) / 2);
`;

const OpponentInfoLayout = styled.div`
  display: flex;
  height: 56px;
  background-color: #fbfbfb;
`;

const UserIconBox = styled.div`
  display: flex;
  height: 56px;
  padding-left: 20px;
  align-items: center;
`;

const UsernameBox = styled.div`
  height: 20px;
  padding-top: 10px;
  padding-left: 20px;
  font-size: 12px;
`;

const UserProductCountBox = styled.div`
  position: absolute;
  left: 72px;
  padding-top: 30px;
  font-size: 12px;
`;

const OpponentProductWrapper = styled.div`
  padding: 20px;
`;

const OpponentProductList = styled.ul`
  display: flex;
  list-style-type: none;
  overflow: scroll;
  flex-wrap: wrap;
  height: 27vh;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
`;

const OpponentProductItem = styled.li`
  width: 100px;
  height: 160px;
  margin-right: 5px;
  margin-bottom: 10px;
  border: 1px solid #d2d2d2;
`;

const OpponentProductImg = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d2d2d2;
`;

const OpponentProductInfo = styled.div`
  widht: 100px;
  height: 60px;
`;

const OpponentProductTitle = styled.div`
  word-break: keep-all;
  padding: 3px;
  font-size: 8px;
`;

const OpponentProductPrice = styled.div`
  padding-left: 3px;
  font-size: 8px;
`;

const MyProductLayout = styled.div`
  height: calc((100vh - 120px) / 2);
`;

const MyInfoLayout = styled.div`
  display: flex;
  height: 56px;
  background-color: #fbfbfb;
`;

const MyProductWrapper = styled.div`
  padding: 20px;
`;

const TradeBtnLayout = styled.button`
  width: 100vw;
  height: 60px;
  padding: 0;
  border: 0;
  background-color: #8f00ff;
  font-size: 15px;
  color: white;
`;
