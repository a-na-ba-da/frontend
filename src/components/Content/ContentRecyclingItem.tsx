import React from 'react';
import styled from 'styled-components';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import * as S from './styles';
import baseURL from '../../api/basURL';

interface ContentRecyclingItemProps {
  id: number;
  title: string;
  thumbnail: string | boolean;
  date: string;
  commentCount: number;
}

export default function ContentRecyclingItem({
  id,
  title,
  thumbnail,
  date,
  commentCount,
}: ContentRecyclingItemProps) {
  const navigate = useNavigate();

  const goPost = () => {
    navigate(`/recycling/${id}`);
  };

  return (
    <S.ItemLayout onClick={goPost}>
      <S.ThumbnailCol
        src={
          thumbnail ? baseURL + '/image/' + 'thumbnail_' + thumbnail : undefined
        }
      />
      <S.DescriptionCol>
        <div>
          <TitleText>{title}</TitleText>
          <S.DateText>{moment(date).format('YYYY.MM.DD hh:mm')}</S.DateText>
        </div>
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
  margin-bottom: 5px;
`;
