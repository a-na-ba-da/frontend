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
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
