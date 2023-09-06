import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { theme } from './theme';
import ScrollTop from './utils/ScrollTop';
import BuyingPost from './pages/Saving/BuyingPost';
import BuyingPostEdit from './pages/Saving/BuyingPostEdit';
import KnowingPost from './pages/Saving/KnowingPost';
import SavingBoard from './pages/Saving/SavingBoard';
import KnowingPostEdit from './pages/Saving/KnowingPostEdit';
import SelectPlace from './pages/Saving/SelectPlace';
import TradingBoard from './pages/Trading/TradingBoard';
import TradingPost from './pages/Trading/TradingPost';
import TradingRequest from './pages/Trading/TradingRequest';
import TradingRequestAddProdcut from './pages/Trading/TradingRequestAddProduct';
import TradingRequestConfirm from './pages/Trading/TradingRequestConfirm';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<SavingBoard />} />
          <Route path="/saving" element={<SavingBoard />} />
          <Route path="/saving/buying/:id" element={<BuyingPost />} />
          <Route path="/saving/buying/write" element={<BuyingPostEdit />} />
          <Route path="/saving/knowing/:id" element={<KnowingPost />} />
          <Route path="/saving/Knowing/write" element={<KnowingPostEdit />} />
          <Route path="/saving/place" element={<SelectPlace />} />
          <Route path="/trading" element={<TradingBoard />} />
          <Route path="/trading/:id/request" element={<TradingRequest />} />
          <Route
            path="/trading/:id/request/add"
            element={<TradingRequestAddProdcut />}
          />
          <Route
            path="/trading/:id/request/confirm"
            element={<TradingRequestConfirm />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
