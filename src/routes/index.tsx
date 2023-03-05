import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Profile from "../pages/Profile"

const RoutesMain = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="profile">
            <Route path=":userId" element={<Profile />} />
            <Route index element={<Navigate to="/" />} />
            <Route path="/login" element={<Login />} />
          </Route>
      </Routes>
  )
}

export default RoutesMain