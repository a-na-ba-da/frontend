import { Route, Routes } from 'react-router-dom';

import BuyingPost from './pages/Saving/BuyingPost';
import BuyingPostEdit from './pages/Saving/BuyingPostEdit';
import KnowingPost from './pages/Saving/KnowingPost';
import SavingBoard from './pages/Saving/SavingBoard';
import KnowingPostEdit from './pages/Saving/KnowingPostEdit';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SavingBoard />} />
      <Route path="/saving" element={<SavingBoard />} />
      <Route path="/saving/buying/:id" element={<BuyingPost />} />
      <Route path="/saving/buying/write" element={<BuyingPostEdit />} />
      <Route path="/saving/knowing/:id" element={<KnowingPost />} />
      <Route path="/saving/Knowing/write" element={<KnowingPostEdit />} />
    </Routes>
  );
}
