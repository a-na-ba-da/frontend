import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../components/Header/Header';
import HeaderLeft from '../components/Header/HeaderLeft';
import PostBack from '../components/Post/PostBack';
import MapSelectPoint from '../components/Map/MapSelectPoint';
import HeaderRight from '../components/Header/HeaderRight';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setLocation as setBuyingLocation } from '../context/reducer/buyingEditReducer';
import { setLocation as setKnowingLocation } from '../context/reducer/knowingEditReducer';
import { setLocation as setSharingLocation } from '../context/reducer/sharingEditReducer';
import { setInit } from '../context/reducer/mapReducer';

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
        setBuyingLocation({
          address: address?.address,
          lat: marker.position.lat,
          lng: marker.position.lng,
        }),
      );
    } else if (whatPage === 'knowing') {
      dispatch(
        setKnowingLocation({
          address: address?.address,
          lat: marker.position.lat,
          lng: marker.position.lng,
        }),
      );
    } else if (whatPage === 'sharing') {
      console.log(address);
      dispatch(
        setSharingLocation({
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
          <PostBack color="#8F00FF" shape="cross" onClick={handleCancelClick} />
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
