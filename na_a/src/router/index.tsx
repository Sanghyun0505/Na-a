import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BabyPage from "../pages/BabyPage";
import FestivalPage from "../pages/FestivalPage";
import HosptialPage from "../pages/HosptialPage";
import UserPage from "../pages/UserPage";
import CommunityRegistPage from "../pages/Regist/Community/RegistPage";
import BabyDaily from "../components/Baby/BabyDaily";
import BabyCareRegistPage from "../pages/Regist/BabyCare/RegistPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/community/regist" element={<CommunityRegistPage />} />
      <Route path="/babycare" element={<BabyPage />} />
      <Route path="/babycare/regist" element={<BabyCareRegistPage />} />
      <Route path="/babycare/:id" element={<BabyDaily />} />
      <Route path="/festival" element={<FestivalPage />} />
      <Route path="/hospital" element={<HosptialPage />} />
      <Route path="/mypage" element={<UserPage />} />
    </Routes>
  );
}
