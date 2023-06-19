import ReactDOM from 'react-dom';

import App from './App';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
