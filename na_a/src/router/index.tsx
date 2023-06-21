import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BabyPage from "../pages/BabyPage";
import FestivalPage from "../pages/FestivalPage";
import HosptialPage from "../pages/HosptialPage";
import UserPage from "../pages/UserPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/babycare" element={<BabyPage />} />
      <Route path="/festival" element={<FestivalPage />} />
      <Route path="/hospital" element={<HosptialPage />} />
      <Route path="/mypage" element={<UserPage />} />
    </Routes>
  );
}
