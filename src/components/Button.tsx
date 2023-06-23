import React from 'react';
import MuiButton from '@mui/material/Button';

interface ButtonProps {
  content: string;
  textColor?: string;
  textSize?: string;
  backgroundColor?: string;
  borderColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  content,
  textColor,
  textSize,
  backgroundColor,
  borderColor,
  onClick,
}: ButtonProps) {
  return (
    <MuiButton
      onClick={onClick}
      sx={{
        height: 30,
        borderRadius: '5px',
        color: textColor ? textColor : 'white',
        fontSize: textSize ? textSize : '13px',
        backgroundColor: backgroundColor ? backgroundColor : '#8f00ff',
        border: borderColor ? `1px solid ${borderColor}` : 'none',
        '&:hover': {
          backgroundColor: backgroundColor ? backgroundColor : '#8f00ff',
        },
        '&:active': {
          backgroundColor: backgroundColor ? backgroundColor : '#8f00ff',
        },
      }}
    >
      {content}
    </MuiButton>
  );
}
