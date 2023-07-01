import React from 'react';
import styled from 'styled-components';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import * as S from './styles';
import baseURL from '../../api/basURL';

interface ContentKnowingItemProps {
  id: number;
  title: string;
  thumbnail: string | boolean;
  date: string;
}

export default function ContentKnowingItem({
  id,
  title,
  thumbnail,
  date,
}: ContentKnowingItemProps) {
  const navigate = useNavigate();

  const goPost = () => {
    navigate(`/saving/knowing/${id}`);
  };

  return (
    <S.ItemLayout onClick={goPost}>
      <S.ThumbnailCol
        src={thumbnail ? baseURL + '/image/' + thumbnail : undefined}
      />
      <S.DescriptionCol>
        <div>
          <TitleText>{title}</TitleText>
          <S.DateText>{moment(date).format('YYYY.MM.DD hh:mm')}</S.DateText>
        </div>
        <S.ChatBox>
          <SmsOutlinedIcon fontSize="small" />
          <S.ChatCountText>2</S.ChatCountText>
        </S.ChatBox>
      </S.DescriptionCol>
    </S.ItemLayout>
  );
}

const TitleText = styled.div`
  margin-bottom: 5px;
  font-size: 15px;
`;
