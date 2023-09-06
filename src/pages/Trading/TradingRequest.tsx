import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import PostBack from '../../components/Post/PostBack';
import UserIcon from '../../asset/img/user-icon.png';
import CancelButton from '../../asset/img/CancelButton.png';

export default function TradingRequest() {
  const { id } = useParams();

  return (
    <>
      <Top>
        <PostBackBox>
          <PostBack color="black" shape="back" />
        </PostBackBox>
        <Title>바꾸기 신청</Title>
      </Top>
      <InfoLayout>
        <UserIconBox>
          <img src={UserIcon} />
        </UserIconBox>
        <UsernameBox>금토끼가내토끼다</UsernameBox>
        <UserProductCountBox>바꾸기 등록 상품 5개</UserProductCountBox>
      </InfoLayout>
      <MainLayout>
        <OpponentProductLayout>
          <OpponentProductTop>
            <OpponentProductLeft>교환 상품 1</OpponentProductLeft>
            <OpponentProductRight>+ 상품추가</OpponentProductRight>
          </OpponentProductTop>
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
              <OpponentProductItem>
                <OpponentProductImg />
                <OpponentProductInfo>
                  <OpponentProductTitle>
                    [아크네켓] 칼라민 선크림 화장품
                  </OpponentProductTitle>
                  <OpponentProductPrice>정가 | 10,000</OpponentProductPrice>
                </OpponentProductInfo>
              </OpponentProductItem>
              <OpponentProductItem>
                <OpponentProductImg />
                <OpponentProductInfo>
                  <OpponentProductTitle>
                    [아크네켓] 칼라민 선크림 화장품
                  </OpponentProductTitle>
                  <OpponentProductPrice>정가 | 10,000</OpponentProductPrice>
                </OpponentProductInfo>
              </OpponentProductItem>
              <OpponentProductItem>
                <OpponentProductImg />
                <OpponentProductInfo>
                  <OpponentProductTitle>
                    [아크네켓] 칼라민 선크림 화장품
                  </OpponentProductTitle>
                  <OpponentProductPrice>정가 | 10,000</OpponentProductPrice>
                </OpponentProductInfo>
              </OpponentProductItem>
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
            <OpponentProductBottom>
              <OpponentProductAllPrice>총 금액</OpponentProductAllPrice>
              <OpponentProductAllPriceText>
                10,000원
              </OpponentProductAllPriceText>
            </OpponentProductBottom>
          </OpponentProductWrapper>
        </OpponentProductLayout>
        <MyProductLayout>
          <MyProductTop>
            <MyProductLeft>내 상품 0/1</MyProductLeft>
            <MyProductRight>+ 상품추가</MyProductRight>
          </MyProductTop>
          <MyProductWrapper>
            <MyProductTextWrapper>
              <MyProductTextTop>상품 추가 버튼을 눌러</MyProductTextTop>
              <MyProductTextBottom>
                교환할 상품을 선택해보세요!
              </MyProductTextBottom>
            </MyProductTextWrapper>
          </MyProductWrapper>
        </MyProductLayout>
      </MainLayout>
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

const InfoLayout = styled.div`
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

const MainLayout = styled.div`
  height: calc(100vh - 176px);
`;

const OpponentProductLayout = styled.div`
  height: calc((100vh - 176px) / 2);
`;

const OpponentProductTop = styled.div`
  display: flex;
  height: 22px;
  padding: 10px;
  justify-content: space-between;
`;

const OpponentProductLeft = styled.div`
  font-size: 12px;
`;

const OpponentProductRight = styled.button`
  border: 1px solid #d2d2d2;
  border-radius: 3px;
  background-color: #fff;
`;

const OpponentProductWrapper = styled.div`
  padding: 10px;
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

const OpponentProductBottom = styled.div`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;
`;

const OpponentProductAllPrice = styled.div`
  font-size: 11px;
`;

const OpponentProductAllPriceText = styled.span`
  margin-top: -1px;
  font-size: 13px;
  color: #8f00ff;
`;

const MyProductLayout = styled.div`
  height: calc((100vh - 176px) / 2);
`;

const MyProductTop = styled.div`
  display: flex;
  height: 22px;
  padding: 10px;
  justify-content: space-between;
`;

const MyProductLeft = styled.div`
  font-size: 12px;
`;

const MyProductRight = styled.button`
  border: 1px solid #d2d2d2;
  border-radius: 3px;
  background-color: #fff;
`;

const MyProductWrapper = styled.div`
  height: 27vh;
  padding: 10px;
`;

const MyProductTextWrapper = styled.div`
  margin-top: 10vh;
`;

const MyProductTextTop = styled.div`
  font-size: 12px;
  text-align: center;
`;

const MyProductTextBottom = styled.div`
  font-size: 12px;
  text-align: center;
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
