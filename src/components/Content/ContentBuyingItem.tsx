import React from 'react';
import styled from 'styled-components';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import * as S from './styles';
import baseURL from '../../api/basURL';

interface ContentBuyingItemProps {
  id: number;
  title: string;
  thumbnail: string | boolean;
  date: string;
  isOnline: boolean;
  price: number;
}

export default function ContentBuyingItem({
  id,
  title,
  thumbnail,
  date,
  isOnline,
  price,
}: ContentBuyingItemProps) {
  const navigate = useNavigate();

  const goPost = () => {
    navigate(`/saving/buying/${id}`);
  };

  return (
    <S.ItemLayout onClick={goPost}>
      <S.ThumbnailCol
        src={thumbnail ? baseURL + '/image/' + thumbnail : undefined}
      />
      <S.DescriptionCol>
        <TitleText>{title}</TitleText>
        <S.DateText>
          {moment(date).format('YYYY.MM.DD hh:mm')} |
          {isOnline ? ' 비대면' : ' 대면'}
        </S.DateText>
        <PriceText>{price.toLocaleString('en')}원</PriceText>
        <S.ChatBox>
          <SmsOutlinedIcon fontSize="small" />
          <S.ChatCountText>2</S.ChatCountText>
        </S.ChatBox>
      </S.DescriptionCol>
    </S.ItemLayout>
  );
}

const TitleText = styled.div`
  font-size: 15px;
`;

const PriceText = styled.div`
  color: #8f00ff;
  font-size: 15px;
`;
