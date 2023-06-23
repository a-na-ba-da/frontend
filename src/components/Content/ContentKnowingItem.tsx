import React from 'react';
import styled from 'styled-components';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { NavigateFunction, useNavigate } from 'react-router-dom';

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
  const navigate: NavigateFunction = useNavigate();

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
          <S.DateText>{date}</S.DateText>
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
  font-size: 15px;
  margin-bottom: 5px;
`;
