import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import RemoveIcon from '@mui/icons-material/Remove';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/Header/HeaderLeft';
import HeaderRight from '../../components/Header/HeaderRight';
import PostBack from '../../components/Post/PostBack';
import EditImgUpload from '../../components/Post/Edit/EditImgUpload';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  setContent,
  setEnd,
  setImages,
  setInit,
  setPricePerDay,
  setStart,
  setTitle,
} from '../../context/reducer/sharingEditReducer';
import { uploadImages } from '../../api/image';
import { createSharingPost } from '../../api/sharing';

export default function SharingPostEdit() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const images = useAppSelector((state) => state.sharingEdit.images);
  const title = useAppSelector((state) => state.sharingEdit.title);
  const start = useAppSelector((state) => state.sharingEdit.start);
  const end = useAppSelector((state) => state.sharingEdit.end);
  const pricePerDay = useAppSelector((state) => state.sharingEdit.pricePerDay);
  const location = useAppSelector((state) => state.sharingEdit.location);
  const content = useAppSelector((state) => state.sharingEdit.content);

  const handleConfirmClick = async () => {
    if (
      title.length > 0 &&
      content.length > 0 &&
      images.length > 0 &&
      location &&
      start &&
      end &&
      pricePerDay > 0
    ) {
      const res = await uploadImages({
        images,
        type: 'LEND',
      });
      const imageNameList = res.data.detail;
      await createSharingPost({
        title,
        content,
        images: imageNameList,
        start,
        end,
        pricePerDay,
        lat: location.lat,
        lng: location.lng,
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

  const handleSelectedPlaceClick = () => {
    navigate('/sharing/place', {
      state: { whatPage: 'sharing' },
    });
  };

  return (
    <BuyingPostEditLayout>
      <Header title="나눠쓰기">
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
          <DateBox>
            대여 기간
            <DateSelectBox>
              <Temp>
                <CalendarImg>
                  <CalendarTodayIcon sx={{ fontSize: '14px' }} />
                </CalendarImg>
                <StyledDatePicker
                  locale={ko}
                  dateFormat="yyyy.MM.dd"
                  selected={start}
                  closeOnScroll={true}
                  onChange={(date: Date) => dispatch(setStart(date))}
                />
              </Temp>
              <RemoveIcon sx={{ margin: '0 5px' }} />
              <Temp>
                <CalendarImg>
                  <CalendarTodayIcon sx={{ fontSize: '14px' }} />
                </CalendarImg>
                <StyledDatePicker
                  locale={ko}
                  dateFormat="yyyy.MM.dd"
                  selected={end}
                  closeOnScroll={true}
                  onChange={(date: Date) => dispatch(setEnd(date))}
                />
              </Temp>
            </DateSelectBox>
          </DateBox>
          <Input
            placeholder="일일 대여 금액"
            value={pricePerDay}
            onChange={(e) => dispatch(setPricePerDay(e.target.value))}
            type="number"
            pattern="^[0-9]*"
          ></Input>
          <PlacePositionBox>
            {location ? <PlaceText>{location.address}</PlaceText> : '대여 위치'}
            <Button
              content="위치 선택"
              textColor="black"
              backgroundColor="white"
              borderColor="#d2d2d2"
              onClick={handleSelectedPlaceClick}
            />
          </PlacePositionBox>
          <TextArea
            placeholder="대여를 원하는 상품에 대해 설명해주세요 :)"
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

const DateBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  font-size: 15px;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;

const DateSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Temp = styled.div`
  position: relative;
  display: flex;
`;

const CalendarImg = styled.div`
  position: absolute;
  top: 7px;
  left: 6px;
  z-index: 1;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 110px;
  height: 30px;
  border: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  padding: 20px;
  background-color: #e9e9e9;
  color: #707070;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: right;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const PlacePositionBox = styled.div`
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
