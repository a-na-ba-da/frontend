import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import HeaderLeft from '../../components/Header/HeaderLeft';
import PostBack from '../../components/Post/PostBack';
import MapSelectPoint from '../../components/Map/MapSelectPoint';
import HeaderRight from '../../components/Header/HeaderRight';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setBuyLocation as setBuyingBuyLocation } from '../../context/reducer/buyingEditReducer';
import { setBuyLocation as setKnowingBuyLocation } from '../../context/reducer/knowingEditReducer';
import { setInit } from '../../context/reducer/mapReducer';

export default function SelectPlace() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const address = useAppSelector((state) => state.map.address);
  const marker = useAppSelector((state) => state.map.marker);
  const whatPage = location.state?.whatPage;

  const handleConfirmClick = () => {
    if (whatPage === 'buying') {
      dispatch(
        setBuyingBuyLocation({
          address: address?.address,
          lat: marker.position.lat,
          lng: marker.position.lng,
        }),
      );
    } else if (whatPage === 'knowing') {
      dispatch(
        setKnowingBuyLocation({
          address: address?.address,
          lat: marker.position.lat,
          lng: marker.position.lng,
        }),
      );
    }
    dispatch(setInit());
    navigate(-1);
  };

  const handleCancelClick = () => {
    dispatch(setInit());
    navigate(-1);
  };

  return (
    <SelectPlaceLayout>
      <Header title="위치 선택">
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
      <MapSelectPoint />
    </SelectPlaceLayout>
  );
}

const SelectPlaceLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ConfirmText = styled.span`
  font-size: 18px;
  color: #8f00ff;
`;
