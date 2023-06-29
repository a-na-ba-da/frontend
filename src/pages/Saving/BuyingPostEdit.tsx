import React, { useState } from 'react';
import styled from 'styled-components';
import { ImageListType } from 'react-images-uploading';
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

export default function BuyingPostEdit() {
  const [selectedMethod, SetSelectedMethod] = useState<string>('');
  const [images, setImages] = useState<ImageListType>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSelectedMethod(e.target.value);
  };

  return (
    <BuyingPostEditLayout>
      <Header title="같이 사요">
        <HeaderLeft>
          <PostBack color="#8F00FF" whatShape="cross" />
        </HeaderLeft>
        <HeaderRight>
          <ConfirmText>확인</ConfirmText>
        </HeaderRight>
      </Header>
      <Line />
      <Main>
        <EditImgUpload images={images} setImages={setImages} />
        <InputBox>
          <Input placeholder="글 제목"></Input>
          <Input placeholder="공구 날짜"></Input>
          <Input placeholder="상대방이 지불해야하는 돈"></Input>
          <CheckBox>
            <div>전달 방법</div>
            <FormControl>
              <RadioGroup row value={selectedMethod} onChange={handleChange}>
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
            <Input placeholder="상품 URL"></Input>
          ) : selectedMethod === 'offline' ? (
            <Input placeholder="장소"></Input>
          ) : null}
          <TextArea placeholder="다른 사람과 같이 구매하고 싶은 상품에 대해&#13;설명해주세요 :)"></TextArea>
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
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  font-size: 15px;
  &::placeholder {
    color: #d1d3d7;
  }
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 0;
  font-size: 15px;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  margin-top: 15px;
  border: 0;
  outline: none;
  resize: none;
  ::placeholder {
    font-size: 15px;
    color: #d1d3d7;
  }
`;
