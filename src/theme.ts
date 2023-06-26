// MUI 색상 팔레트 설정
// 여기서 MUI의 primary, secondary 색상을 지정할 수 있다.
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8f00ff',
      // light: main값을 통해 계산됨
      // dark: main값을 통해 계산됨
      // contrastText: main값을 통해 계산됨
    },
  },
});
