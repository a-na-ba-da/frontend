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

export default function KnowingPostEdit() {
  const [selectedMethod, SetSelectedMethod] = useState<string>('');
  const [images, setImages] = useState<ImageListType>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSelectedMethod(e.target.value);
  };

  return (
    <KnowingPostEditLayout>
      <Header title="같이 알아요">
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
          <CheckBox>
            <div>구매처</div>
            <FormControl>
              <RadioGroup row value={selectedMethod} onChange={handleChange}>
                <FormControlLabel
                  value="offline"
                  control={<Radio />}
                  label="오프라인"
                />
                <FormControlLabel
                  value="online"
                  control={<Radio />}
                  label="온라인"
                />
              </RadioGroup>
            </FormControl>
          </CheckBox>
          {selectedMethod === 'online' ? (
            <Input placeholder="행사 URL"></Input>
          ) : selectedMethod === 'offline' ? (
            <Input placeholder="행사 위치"></Input>
          ) : null}
          <TextArea placeholder="다른 사람과 같이 구매하고 싶은 상품에 대해&#13;설명해주세요 :)"></TextArea>
        </InputBox>
      </Main>
    </KnowingPostEditLayout>
  );
}

const KnowingPostEditLayout = styled.div`
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
