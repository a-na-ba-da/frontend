// import BuyingPost from './pages/Saving/BuyingPost';
import BuyingPost from './pages/Saving/BuyingPost';
import SavingBoard from './pages/Saving/SavingBoard';
// import BuyingPostEdit from './pages/Saving/BuyingPostEdit';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SavingBoard />} />
      <Route path="/saving/buying/:id" element={<BuyingPost />} />
      <Route path="/saving" element={<SavingBoard />} />
    </Routes>
  );
}
