import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

interface PostBackProps {
  color?: string; // 아이콘 색상
  whatShape: string; // 아이콘 모양 (cross 또는 back)
}

export default function PostBack({ color, whatShape }: PostBackProps) {
  const navigate = useNavigate();

  return (
    <PostBackLayout onClick={() => navigate(-1)}>
      {whatShape === 'cross' ? (
        <CloseIcon sx={{ color }} />
      ) : (
        <ArrowBackIosIcon sx={{ color }} />
      )}
    </PostBackLayout>
  );
}

const PostBackLayout = styled.div`
  position: absolute;
  left: 20px;
  top: 25px;
  z-index: 1;
`;
