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
import RecyclingBoard from './pages/Recycling/RecyclingBoard';
import RecyclingPost from './pages/Recycling/RecyclingPost';
import RecyclingPostEdit from './pages/Recycling/RecyclingPostEdit';
import MessageMain from './pages/Message/MessageMain';
import MessageRoom from './pages/Message/MessageRoom';

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
          <Route path="/recycling" element={<RecyclingBoard />} />
          <Route path="/recycling/:id" element={<RecyclingPost />} />
          <Route path="/recycling/write" element={<RecyclingPostEdit />} />
          <Route path="/recycling/place" element={<SelectPlace />} />
          <Route path="/message" element={<MessageMain />} />
          <Route path="/message/:id" element={<MessageRoom />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
