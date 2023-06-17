import React from 'react';
import styled from 'styled-components';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloseIcon from '@mui/icons-material/Close';

import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/Header/HeaderLeft';
import HeaderRight from '../../components/Header/HeaderRight';

const BuyingPostEdit = () => {
  return (
    <BuyingPostEditLayout>
      <Header title="같이 사요">
        <HeaderLeft>
          <CloseIcon color="primary" />
        </HeaderLeft>
        <HeaderRight>
          <ConfirmText>확인</ConfirmText>
        </HeaderRight>
      </Header>
      <Line />
      <Main>
        <ImgBox>
          <CameraAltIcon />
          <ImgCountBox>0 / 10</ImgCountBox>
        </ImgBox>
        <InputBox>
          <Input placeholder="글 제목"></Input>
          <Input placeholder="공구 날짜"></Input>
          <Input placeholder="상대방이 지불해야하는 돈"></Input>
          <Input placeholder="상품 URL"></Input>
          <CheckBox>
            <div>전달 방법</div>
            <FormControl>
              <RadioGroup row>
                <FormControlLabel
                  value="대면"
                  control={<Radio />}
                  label="대면"
                />
                <FormControlLabel
                  value="비대면"
                  control={<Radio />}
                  label="비대면"
                />
              </RadioGroup>
            </FormControl>
          </CheckBox>
          <TextArea placeholder="다른 사람과 같이 구매하고 싶은 상품에 대해&#13;설명해주세요 :)"></TextArea>
        </InputBox>
      </Main>
    </BuyingPostEditLayout>
  );
};

export default BuyingPostEdit;

const BuyingPostEditLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ConfirmText = styled.span`
  font-size: 18px;
  color: #8f00ff;
`;

const Line = styled.hr`
  background: #eaeaeb;
  height: 1px;
  border: 0;
  margin: 0;
`;

const Main = styled.main`
  padding: 0 15px;
`;

const ImgBox = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #dedde2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

const ImgCountBox = styled.div`
  font-size: 12px;
  margin-top: 2px;
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
  border: 0;
  height: 50px;
  box-sizing: border-box;
  outline: none;
  font-size: 15px;
  &::placeholder {
    color: #d1d3d7;
  }
`;

const CheckBox = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 0;
`;

const TextArea = styled.textarea`
  resize: none;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  border: 0;
  margin-top: 15px;
  ::placeholder {
    font-size: 15px;
    color: #d1d3d7;
  }
`;
