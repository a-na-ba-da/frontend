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
import Landing from './pages/Landing';
import Nickname from './pages/Nickname';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<SavingBoard />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/nickname" element={<Nickname />} />
          <Route path="/saving" element={<SavingBoard />} />
          <Route path="/saving/buying/:id" element={<BuyingPost />} />
          <Route path="/saving/buying/write" element={<BuyingPostEdit />} />
          <Route path="/saving/knowing/:id" element={<KnowingPost />} />
          <Route path="/saving/Knowing/write" element={<KnowingPostEdit />} />
          <Route path="/saving/place" element={<SelectPlace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
