import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { IconButton } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setMarker, setAddress } from '../../context/reducer/mapReducer';

export default function MapSelectPoint() {
  const dispatch = useAppDispatch();
  const marker = useAppSelector((state) => state.map.marker);
  const address = useAppSelector((state) => state.map.address);
  interface gpsPositionProps {
    position: {
      lat: number;
      lng: number;
    };
  }
  const [gpsPosition, setGpsPosition] = useState<gpsPositionProps>({
    position: {
      lat: 36.77322,
      lng: 126.933632,
    },
  });

  const loadGpsPosition = () => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 가져옴
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGpsPosition({
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          }),
            dispatch(
              setMarker({
                position: {
                  lat: position.coords.latitude, // 위도
                  lng: position.coords.longitude, // 경도
                },
                isLoading: false,
              }),
            );
        },
        (err) => {
          dispatch(
            setMarker({
              errMsg: err.message,
              isLoading: false,
            }),
          );
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정
      dispatch(
        setMarker({
          errMsg: 'geolocation을 사용할수 없어요..',
          isLoading: false,
        }),
      );
    }
  };

  useEffect(() => {
    loadGpsPosition();
  }, []);

  useEffect(() => {
    // 좌표를 기반으로 지번, 도로명 주소를 가져오는 기능
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2Address(
      marker.position.lng,
      marker.position.lat,
      (result: { [key: string]: any }, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          dispatch(
            setAddress({
              address: result[0].address?.address_name,
              road_address: result[0].road_address?.address_name,
            }),
          );
        }
      },
    );
  }, [marker]);

  const handleGpsClick = () => {
    loadGpsPosition();
  };

  return (
    <MapSelectPointLayout>
      <TopSection>
        <div>지번주소: {address?.address}</div>
        <div>도로명주소: {address?.road_address}</div>
      </TopSection>
      <Map // 지도를 표시할 Container
        center={gpsPosition.position}
        style={{
          width: '100vw',
          height: 'calc(100vh - 133px)',
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) =>
          dispatch(
            setMarker({
              position: {
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              },
            }),
          )
        }
      >
        <CurrentLocationBox>
          <IconButton
            color="primary"
            sx={{
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'white',
              },
              '&:active': {
                backgroundColor: 'white',
              },
              boxShadow: 3,
            }}
            onClick={handleGpsClick}
          >
            <GpsFixedIcon />
          </IconButton>
        </CurrentLocationBox>
        <MapMarker position={marker.position} />
        {!marker.isLoading && (
          <MapMarker position={marker.position}></MapMarker>
        )}
      </Map>
    </MapSelectPointLayout>
  );
}

const MapSelectPointLayout = styled.div`
  position: relative;
`;

const TopSection = styled.section`
  width: 100%;
  height: 56px;
  padding: 10px;
  background-color: #fbfbfb;
  box-sizing: border-box;
`;

const CurrentLocationBox = styled.div`
  position: absolute;
  top: 70px;
  right: 10px;
  z-index: 1;
`;
