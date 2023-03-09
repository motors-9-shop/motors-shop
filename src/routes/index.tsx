import { Navigate, Route, Routes } from "react-router-dom";
import AdDetailPage from "../pages/AdDetailPage";
import RegisterPage from "../pages/RegisterPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ad">
        <Route path=":adId" element={<AdDetailPage />} />
      </Route>
      <Route path="profile">
        <Route path=":userId" element={<Profile />} />
        <Route index element={<Navigate to="/" />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default MainRoutes;
