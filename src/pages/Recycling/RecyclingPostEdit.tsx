import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/Header/HeaderLeft';
import HeaderRight from '../../components/Header/HeaderRight';
import PostBack from '../../components/Post/PostBack';
import EditImgUpload from '../../components/Post/Edit/EditImgUpload';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  setContent,
  setImages,
  setInit,
  setTitle,
} from '../../context/reducer/recyclingEditReducer';
import { uploadImages } from '../../api/image';
import { createRecyclingPost } from '../../api/recycling';

export default function SharingPostEdit() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.recyclingEdit.images);
  const title = useAppSelector((state) => state.recyclingEdit.title);
  const content = useAppSelector((state) => state.recyclingEdit.content);

  const handleConfirmClick = async () => {
    if (title.length > 0 && content.length > 0 && images.length > 0) {
      const res = await uploadImages({
        images,
        type: 'RECYCLE',
      });
      const imageNameList = res.data.detail;
      await createRecyclingPost({
        title,
        content,
        images: imageNameList,
      });
      alert('작성에 성공했습니다.');
      dispatch(setInit());
      navigate(-1);
    } else alert('내용을 입력해주세요.');
  };

  const handleCancelClick = () => {
    dispatch(setInit());
    navigate(-1);
  };

  return (
    <BuyingPostEditLayout>
      <Header title="다시쓰기">
        <HeaderLeft>
          <PostBack color="#8F00FF" shape="cross" onClick={handleCancelClick} />
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
          <TextArea
            placeholder="자신의 절약 습관을 자랑해보세요 :)"
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
