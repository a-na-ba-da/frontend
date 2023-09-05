import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { theme } from './theme';
import ScrollTop from './utils/ScrollTop';
import BuyingPost from './pages/Saving/BuyingPost';
import BuyingPostEdit from './pages/Saving/BuyingPostEdit';
import KnowingPost from './pages/Saving/KnowingPost';
import SavingBoard from './pages/Saving/SavingBoard';
import KnowingPostEdit from './pages/Saving/KnowingPostEdit';
import SelectPlace from './pages/SelectPlace';
import Landing from './pages/Landing';
import Nickname from './pages/Nickname';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RecyclingBoard from './pages/Recycling/RecyclingBoard';
import RecyclingPost from './pages/Recycling/RecyclingPost';
import RecyclingPostEdit from './pages/Recycling/RecyclingPostEdit';
import MessageMain from './pages/Message/MessageMain';
import MessageRoom from './pages/Message/MessageRoom';
import SharingBoard from './pages/Saving/SharingBoard';
import SharingPost from './pages/Saving/SharingPost';
import SharingPostEdit from './pages/Saving/SharingPostEdit';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute component={<SavingBoard />} />}
          />
          <Route
            path="/landing"
            element={<PublicRoute component={<Landing />} />}
          />
          <Route
            path="/nickname"
            element={<PrivateRoute component={<Nickname />} />}
          />
          <Route
            path="/saving"
            element={<PrivateRoute component={<SavingBoard />} />}
          />
          <Route
            path="/saving/buying/:id"
            element={<PrivateRoute component={<BuyingPost />} />}
          />
          <Route
            path="/saving/buying/write"
            element={<PrivateRoute component={<BuyingPostEdit />} />}
          />
          <Route
            path="/saving/knowing/:id"
            element={<PrivateRoute component={<KnowingPost />} />}
          />
          <Route
            path="/saving/Knowing/write"
            element={<PrivateRoute component={<KnowingPostEdit />} />}
          />
          <Route
            path="/saving/place"
            element={<PrivateRoute component={<SelectPlace />} />}
          />
          <Route
            path="/recycling"
            element={<PrivateRoute component={<RecyclingBoard />} />}
          />
          <Route
            path="/recycling/:id"
            element={<PrivateRoute component={<RecyclingPost />} />}
          />
          <Route
            path="/recycling/write"
            element={<PrivateRoute component={<RecyclingPostEdit />} />}
          />
          <Route
            path="/recycling/place"
            element={<PrivateRoute component={<SelectPlace />} />}
          />
          <Route
            path="/message"
            element={<PrivateRoute component={<MessageMain />} />}
          />
          <Route
            path="/message/:id"
            element={<PrivateRoute component={<MessageRoom />} />}
          />
          <Route path="/sharing" element={<SharingBoard />} />
          <Route path="/sharing/:id" element={<SharingPost />} />
          <Route path="/sharing/write" element={<SharingPostEdit />} />
          <Route path="/sharing/place" element={<SelectPlace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
