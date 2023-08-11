import React from 'react';
import styled from 'styled-components';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import * as S from './styles';
import baseURL from '../../api/basURL';

interface ContentSharingItemProps {
  id: number;
  title: string;
  thumbnail: string | boolean;
  date: string;
  price: number;
  commentCount: number;
}

export default function ContentSharingItem({
  id,
  title,
  thumbnail,
  date,
  price,
  commentCount,
}: ContentSharingItemProps) {
  const navigate = useNavigate();

  const goPost = () => {
    navigate(`/sharing/${id}`);
  };

  return (
    <S.ItemLayout onClick={goPost}>
      <S.ThumbnailCol
        src={
          thumbnail ? baseURL + '/image/' + 'thumbnail_' + thumbnail : undefined
        }
      />
      <S.DescriptionCol>
        <TitleText>{title}</TitleText>
        <S.DateText>{moment(date).format('YYYY.MM.DD hh:mm')}</S.DateText>
        <PriceText>{price?.toLocaleString('en')}원</PriceText>
        <S.ChatBox>
          <SmsOutlinedIcon fontSize="small" />
          <S.ChatCountText>{commentCount}</S.ChatCountText>
        </S.ChatBox>
      </S.DescriptionCol>
    </S.ItemLayout>
  );
}

const TitleText = styled.div`
  font-size: 15px;
`;

const PriceText = styled.div`
  font-size: 15px;
  color: #8f00ff;
`;
