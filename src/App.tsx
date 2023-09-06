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
import SharingBoard from './pages/Sharing/SharingBoard';
import SharingPost from './pages/Sharing/SharingPost';
import SharingPostEdit from './pages/Sharing/SharingPostEdit';
import TradingBoard from './pages/Trading/TradingBoard';
import TradingRequest from './pages/Trading/TradingRequest';
import TradingRequestAddProdcut from './pages/Trading/TradingRequestAddProduct';
import TradingRequestConfirm from './pages/Trading/TradingRequestConfirm';

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
          <Route
            path="/sharing"
            element={<PrivateRoute component={<SharingBoard />} />}
          />
          <Route
            path="/sharing/:id"
            element={<PrivateRoute component={<SharingPost />} />}
          />
          <Route
            path="/sharing/write"
            element={<PrivateRoute component={<SharingPostEdit />} />}
          />
          <Route
            path="/sharing/place"
            element={<PrivateRoute component={<SelectPlace />} />}
          />
          <Route
            path="/trading"
            element={<PrivateRoute component={<TradingBoard />} />}
          />
          <Route
            path="/trading/:id/request"
            element={<PrivateRoute component={<TradingRequest />} />}
          />
          <Route
            path="/trading/:id/request/add"
            element={<PrivateRoute component={<TradingRequestAddProdcut />} />}
          />
          <Route
            path="/trading/:id/request/confirm"
            element={<PrivateRoute component={<TradingRequestConfirm />} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
