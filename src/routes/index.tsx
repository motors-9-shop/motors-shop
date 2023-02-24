import { Navigate, Route, Routes } from "react-router-dom";
import AdDetailPage from "../pages/AdDetailPage";
import RegisterPage from "../pages/RegisterPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="ad">
        <Route index element={<Navigate to="/" />} />
        <Route path=":adId" element={<AdDetailPage />} />
      </Route>
      <Route path="signup" element={<RegisterPage />} />
    </Routes>
  );
};

export default MainRoutes;
