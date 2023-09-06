import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
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
  setBuyingMethod,
  setDeliveryMethod,
  setContent,
  setImages,
  setInit,
  setPay,
  setProductUrl,
  setTitle,
  setBuyPlaceDetail,
} from '../../context/reducer/buyingEditReducer';
import { uploadImages } from '../../api/image';
import { createMeetBuyingPost, createParcelBuyingPost } from '../../api/saving';

export default function BuyingPostEdit() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.buyingEdit.images);
  const title = useAppSelector((state) => state.buyingEdit.title);
  const buyDate = useAppSelector((state) => state.buyingEdit.buyDate);
  const pay = useAppSelector((state) => state.buyingEdit.pay);
  const buyingMethod = useAppSelector((state) => state.buyingEdit.buyingMethod);
  const deliveryMethod = useAppSelector(
    (state) => state.buyingEdit.deliveryMethod,
  );
  const productUrl = useAppSelector((state) => state.buyingEdit.productUrl);
  const buyPlaceDetail = useAppSelector(
    (state) => state.buyingEdit.buyPlaceDetail,
  );
  const location = useAppSelector((state) => state.buyingEdit.location);
  const content = useAppSelector((state) => state.buyingEdit.content);

  // 만약 URL이 "http://" 또는 "https://"로 시작하지 않으면 앞에 붙여줌
  function addHttpIfNeeded(url: string) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'http://' + url;
    }
    return url;
  }

  const handleConfirmClick = async () => {
    if (title.length > 0 && content.length > 0 && images.length > 0) {
      if (buyingMethod === 'online' && productUrl) {
        const res = await uploadImages({
          images,
          type: 'BUY_TOGETHER',
        });
        const imageNameList = res.data.detail;
        if (deliveryMethod === 'online') {
          await createParcelBuyingPost({
            title,
            content,
            images: imageNameList,
            productUrl: addHttpIfNeeded(productUrl),
            buyDate,
            pay,
          });
          alert('작성에 성공했습니다.');
          dispatch(setInit());
          navigate(-1);
        } else if (deliveryMethod === 'offline' && location) {
          await createMeetBuyingPost({
            title,
            content,
            images: imageNameList,
            buyDate,
            pay,
            productUrl: addHttpIfNeeded(productUrl),
            deliveryPlaceLat: location.lat,
            deliveryPlaceLng: location.lng,
          });
          alert('작성에 성공했습니다.');
          dispatch(setInit());
          navigate(-1);
        } else alert('내용을 작성해주세요.');
      } else if (buyingMethod === 'offline' && buyPlaceDetail) {
        const res = await uploadImages({
          images,
          type: 'BUY_TOGETHER',
        });
        const imageNameList = res.data.detail;
        if (deliveryMethod === 'online') {
          await createParcelBuyingPost({
            title,
            content,
            images: imageNameList,
            buyPlaceDetail,
            buyDate,
            pay,
          });
          alert('작성에 성공했습니다.');
          dispatch(setInit());
          navigate(-1);
        } else if (deliveryMethod === 'offline' && location) {
          await createMeetBuyingPost({
            title,
            content,
            images: imageNameList,
            buyDate,
            pay,
            buyPlaceDetail: buyPlaceDetail,
            deliveryPlaceLat: location.lat,
            deliveryPlaceLng: location.lng,
          });
          alert('작성에 성공했습니다.');
          dispatch(setInit());
          navigate(-1);
        } else alert('내용을 작성해주세요.');
        dispatch(setInit());
        navigate(-1);
      } else alert('내용을 작성해주세요.');
    } else alert('내용을 작성해주세요.');
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

  const SelctedPlace = () => {
    return (
      <PlacePositionBox>
        {location ? <PlaceText>{location.address}</PlaceText> : '만날 장소'}
        <Button
          content="위치 선택"
          textColor="black"
          backgroundColor="white"
          borderColor="#d2d2d2"
          onClick={handleSelectedPlaceClick}
        />
      </PlacePositionBox>
    );
  };

  const generateBuyingMethodElement = () => {
    if (buyingMethod === 'offline') {
      return (
        <Input
          placeholder="상품 구매 장소"
          value={buyPlaceDetail}
          onChange={(e) => dispatch(setBuyPlaceDetail(e.target.value))}
        ></Input>
      );
    } else if (buyingMethod === 'online') {
      return (
        <Input
          placeholder="상품 URL"
          value={productUrl}
          onChange={(e) => dispatch(setProductUrl(e.target.value))}
        ></Input>
      );
    }
  };

  const generateDeliveryMethodElement = () => {
    if (deliveryMethod === 'offline') {
      return <SelctedPlace />;
    }
  };

  return (
    <BuyingPostEditLayout>
      <Header title="같이 사요">
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
            공구 날짜
            <DateInputBox>
              <CalendarImg>
                <CalendarTodayIcon sx={{ fontSize: '14px' }} />
              </CalendarImg>
              <StyledDatePicker
                locale={ko}
                dateFormat="yyyy.MM.dd"
                selected={buyDate}
                closeOnScroll={true}
                onChange={(date: Date) => dispatch(setBuyDate(date))}
              />
            </DateInputBox>
          </DateBox>
          <Input
            placeholder="상대방이 지불해야하는 돈"
            value={pay}
            onChange={(e) => dispatch(setPay(e.target.value))}
            type="number"
            pattern="^[0-9]*"
          ></Input>
          <CheckBox>
            <div>구매 방식</div>
            <FormControl>
              <RadioGroup
                row
                value={buyingMethod}
                onChange={(e) => dispatch(setBuyingMethod(e.target.value))}
              >
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
          {generateBuyingMethodElement()}
          <CheckBox>
            <div>전달 방법</div>
            <FormControl>
              <RadioGroup
                row
                value={deliveryMethod}
                onChange={(e) => dispatch(setDeliveryMethod(e.target.value))}
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
          {generateDeliveryMethodElement()}
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

const DateInputBox = styled.div`
  position: relative;
`;

const CalendarImg = styled.div`
  position: absolute;
  top: 8px;
  left: 10px;
  z-index: 1;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 115px;
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
