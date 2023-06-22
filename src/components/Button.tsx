import React from 'react';
import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/material';
import MuiButton from '@mui/material/Button';

interface ButtonProps {
  content: string;
  textColor?: string;
  textSize?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export default function Button({
  content,
  textColor,
  textSize,
  backgroundColor,
  borderColor,
}: ButtonProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Btn
        textColor={textColor}
        textSize={textSize}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      >
        {content}
      </Btn>
    </StyledEngineProvider>
  );
}

interface BtnProps {
  textColor?: string;
  textSize?: string;
  backgroundColor?: string;
  borderColor?: string;
}

const Btn = styled(MuiButton)<BtnProps>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#8f00ff'};
  color: ${(props) => (props.textColor ? props.textColor : 'white')};
  font-size: ${(props) => (props.textSize ? props.textSize : '13px')};
  height: 30px;
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : '0')};
  border-radius: 5px;
  &:hover {
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : '#8f00ff'};
  }
  &:active {
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : '#8f00ff'};
  }
`;
