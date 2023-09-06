import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

import PostBack from '../../components/Post/PostBack';
import CheckIcon from '../../asset/img/check-icon.png';

export default function TradingRequestAddProdcut() {
  return (
    <>
      <Top>
        <PostBackBox>
          <PostBack color="#8f00ff" shape="back" />
        </PostBackBox>
        <Title>상품 추가</Title>
      </Top>
      <SearchLayout>
        <SearchInputBox placeholder="검색어를 입력해주세요." />
        <SearchImg>
          <SearchIcon style={{ verticalAlign: 'middle' }} />
        </SearchImg>
      </SearchLayout>
      <ProductCountTextBox>
        <ProductCountTextPurple>1</ProductCountTextPurple>건 선택됨
      </ProductCountTextBox>
      <ProductList>
        <UnselectedProductItemBox>
          <ProductItem>
            <ProductImg />
            <ProductInfo>
              <ProductTitle>[폴메디슨] 옴므 헤어 포마드왁스</ProductTitle>
              <ProductPrice>정가 15,900원</ProductPrice>
            </ProductInfo>
          </ProductItem>
        </UnselectedProductItemBox>
        <SelectedProductItemBox>
          <SelectedProductImg>
            <CheckIconBox>
              <img src={CheckIcon} />
            </CheckIconBox>
          </SelectedProductImg>
          <ProductItem>
            <ProductImg />
            <ProductInfo>
              <ProductTitle>[폴메디슨] 옴므 헤어 포마드왁스</ProductTitle>
              <ProductPrice>정가 15,900원</ProductPrice>
            </ProductInfo>
          </ProductItem>
        </SelectedProductItemBox>
        <UnselectedProductItemBox>
          <ProductItem>
            <ProductImg />
            <ProductInfo>
              <ProductTitle>[폴메디슨] 옴므 헤어 포마드왁스</ProductTitle>
              <ProductPrice>정가 15,900원</ProductPrice>
            </ProductInfo>
          </ProductItem>
        </UnselectedProductItemBox>
        <SelectedProductItemBox>
          <SelectedProductImg>
            <CheckIconBox>
              <img src={CheckIcon} />
            </CheckIconBox>
          </SelectedProductImg>
          <ProductItem>
            <ProductImg />
            <ProductInfo>
              <ProductTitle>[폴메디슨] 옴므 헤어 포마드왁스</ProductTitle>
              <ProductPrice>정가 15,900원</ProductPrice>
            </ProductInfo>
          </ProductItem>
        </SelectedProductItemBox>
      </ProductList>
      <ConfirmBtnLayout>확인</ConfirmBtnLayout>
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

const SearchLayout = styled.header`
  display: flex;
  position: relative;
  height: 50px;
  padding: 0 15px;
  background-color: #fbfbfb;
  justify-content: center;
  align-items: center;
`;

const SearchInputBox = styled.input`
  width: 100%;
  height: 34px;
  padding-left: 10px;
  border: solid 1px #e7e7e7;
  border-radius: 5px;
  background-color: white;
  box-sizing: border-box;
`;

const SearchImg = styled.div`
  position: absolute;
  right: 20px;
`;

const ProductCountTextBox = styled.div`
  display: flex;
  padding: 15px;
  font-size: 12px;
`;

const ProductCountTextPurple = styled.span`
  color: #8f00ff;
`;

const ProductList = styled.ul`
  display: flex;
  list-style-type: none;
  overflow: scroll;
  flex-wrap: wrap;
  height: calc(100vh - 216px);
  padding: 0;
  margin: 0;
  align-content: flex-start;
`;

const UnselectedProductItemBox = styled.li`
  width: calc(100vw - 10px);
  height: 90px;
  margin: 5px;
  border: 1px solid #dedde2;
  border-radius: 10px;
`;

const ProductItem = styled.div`
  display: flex;
  padding: 15px;
`;

const ProductImg = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #dedde2;
  border-radius: 5px;
`;

const ProductInfo = styled.div`
  padding-left: 5px;
`;

const ProductTitle = styled.div`
  padding-bottom: 10px;
  font-size: 12px;
`;

const ProductPrice = styled.div`
  font-size: 10px;
  color: #8f8f8f;
`;

const SelectedProductItemBox = styled.div`
  width: calc(100vw - 10px);
  height: 90px;
  margin: 5px;
  border: 1px solid #8f00ff;
  border-radius: 10px;
`;

const SelectedProductImg = styled.div`
  position: fixed;
  margin-top: 35px;
  margin-left: 8px;
`;

const CheckIconBox = styled.div`
  width: 18px;
  height: 18px;
`;

const ConfirmBtnLayout = styled.button`
  width: 100vw;
  height: 60px;
  padding: 0;
  border: 0;
  background-color: #8f00ff;
  font-size: 15px;
  color: white;
`;
