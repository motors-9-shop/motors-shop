import { Navigate, Route, Routes } from "react-router-dom";
import AdDetailPage from "../pages/AdDetailPage";
import RegisterPage from "../pages/RegisterPage";
import Home from "../pages/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="ad">
        <Route index element={<Navigate to="/" />} />
        <Route path=":adId" element={<AdDetailPage />} />
      </Route>
      <Route path="signup" element={<RegisterPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MainRoutes;
