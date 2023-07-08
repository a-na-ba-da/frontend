import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/Header/HeaderLeft';
import HeaderRight from '../../components/Header/HeaderRight';
import PostBack from '../../components/Post/PostBack';
import EditImgUpload from '../../components/Post/Edit/EditImgUpload';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  setBuyDate,
  setContent,
  setImages,
  setInit,
  setPay,
  setProductUrl,
  setSelectedMethod,
  setTitle,
} from '../../context/reducer/buyingEditReducer';

export default function BuyingPostEdit() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.buyingEdit.images);
  const title = useAppSelector((state) => state.buyingEdit.title);
  const buyDate = useAppSelector((state) => state.buyingEdit.buyDate);
  const pay = useAppSelector((state) => state.buyingEdit.pay);
  const selectedMethod = useAppSelector(
    (state) => state.buyingEdit.selectedMethod,
  );
  const productUrl = useAppSelector((state) => state.buyingEdit.productUrl);
  const buyLocation = useAppSelector((state) => state.buyingEdit.buyLocation);
  const content = useAppSelector((state) => state.buyingEdit.content);

  const handleConfirmClick = () => {
    dispatch(setInit());
  };

  const handleCancelClick = () => {
    dispatch(setInit());
    navigate(-1);
  };

  const handleSelectedPlaceClick = () => {
    navigate('/saving/place', {
      state: { whatPage: 'buying' },
    });
  };

  return (
    <BuyingPostEditLayout>
      <Header title="같이 사요">
        <HeaderLeft>
          <PostBack
            color="#8F00FF"
            whatShape="cross"
            onClick={handleCancelClick}
          />
        </HeaderLeft>
        <HeaderRight>
          <ConfirmText onClick={handleConfirmClick}>확인</ConfirmText>
        </HeaderRight>
      </Header>
      <Line />
      <Main>
        <EditImgUpload images={images} setImages={setImages} />
        <InputBox>
          <Input
            placeholder="글 제목"
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          ></Input>
          <Input
            placeholder="공구 날짜"
            value={buyDate}
            onChange={(e) => dispatch(setBuyDate(e.target.value))}
          ></Input>
          <Input
            placeholder="상대방이 지불해야하는 돈"
            value={pay}
            onChange={(e) => dispatch(setPay(e.target.value))}
            type="number"
            pattern="^[0-9]*"
          ></Input>
          <CheckBox>
            <div>전달 방법</div>
            <FormControl>
              <RadioGroup
                row
                value={selectedMethod}
                onChange={(e) => dispatch(setSelectedMethod(e.target.value))}
              >
                <FormControlLabel
                  value="offline"
                  control={<Radio />}
                  label="대면"
                />
                <FormControlLabel
                  value="online"
                  control={<Radio />}
                  label="비대면"
                />
              </RadioGroup>
            </FormControl>
          </CheckBox>
          {selectedMethod === 'online' ? (
            <Input
              placeholder="상품 URL"
              value={productUrl}
              onChange={(e) => dispatch(setProductUrl(e.target.value))}
            ></Input>
          ) : selectedMethod === 'offline' ? (
            <EventPositionBox>
              {buyLocation ? (
                <PlaceText>{buyLocation.address}</PlaceText>
              ) : (
                '장소'
              )}
              <Button
                content="위치 선택"
                textColor="black"
                backgroundColor="white"
                borderColor="#d2d2d2"
                onClick={handleSelectedPlaceClick}
              />
            </EventPositionBox>
          ) : null}
          <TextArea
            placeholder="다른 사람과 같이 구매하고 싶은 상품에 대해&#13;설명해주세요 :)"
            value={content}
            onChange={(e) => dispatch(setContent(e.target.value))}
          ></TextArea>
        </InputBox>
      </Main>
    </BuyingPostEditLayout>
  );
}

const BuyingPostEditLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ConfirmText = styled.span`
  color: #8f00ff;
  font-size: 18px;
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

const InputBox = styled.div`
  & > :first-child {
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
  }
  & > :not(:first-child) {
    border-bottom: 1px solid #f3f3f3;
  }
  & > :last-child {
    border-bottom: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  font-size: 15px;
  box-sizing: border-box;
  &::placeholder {
    color: #d1d3d7;
  }
`;

const EventPositionBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 2px 2px 1px 2px;
  font-size: 15px;
  color: #d1d3d7;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const PlaceText = styled.span`
  color: black;
`;

const CheckBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border: 0;
  font-size: 15px;
  justify-content: space-between;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-top: 15px;
  border: 0;
  outline: none;
  resize: none;
  box-sizing: border-box;
  ::placeholder {
    font-size: 15px;
    color: #d1d3d7;
  }
`;
