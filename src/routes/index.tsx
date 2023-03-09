import AdDetailPage from "../pages/AdDetailPage";
import RegisterPage from "../pages/RegisterPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="ad">
        <Route index element={<Navigate to="/" />} />
        <Route path=":adId" element={<AdDetailPage />} />
      </Route>
      <Route path="signup" element={<RegisterPage />} />
      <Route path="/" element={<Home />} />
      <Route path="profile">
        <Route path=":userId" element={<Profile />} />
        <Route index element={<Navigate to="/" />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
