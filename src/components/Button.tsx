import React from 'react';
import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/material';
import MuiButton from '@mui/material/Button';

const Button = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Btn>쪽지 보내기</Btn>
    </StyledEngineProvider>
  );
};

export default Button;

const Btn = styled(MuiButton)`
  background-color: #8f00ff;
  color: white;
  height: 30px;
  width: 86px;
  border-radius: 5px;
  &:hover {
    background-color: #8f00ff;
  }
  &:active {
    background-color: #8f00ff;
  }
`;
