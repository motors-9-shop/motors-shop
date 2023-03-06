import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Login from "../pages/Login";

const RoutesMain = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="profile">
            <Route path=":userId" element={<Profile />} />
            <Route index element={<Navigate to="/" />} />
          </Route>
          <Route path="/login" element={<Login />} />
      </Routes>
  )
}

export default RoutesMain