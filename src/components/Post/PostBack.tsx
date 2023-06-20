import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

interface PostBackProps {
  color?: string;
}

export default function PostBack({ color }: PostBackProps) {
  const navigate = useNavigate();

  return (
    <PostBackLayout onClick={() => navigate(-1)}>
      <ArrowBackIosIcon sx={{ color }} />
    </PostBackLayout>
  );
}

const PostBackLayout = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
`;
