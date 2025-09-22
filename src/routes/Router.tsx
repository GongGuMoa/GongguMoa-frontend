import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Location from "../pages/Location";
import Mypage from "../pages/Mypage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/location" element={<Location />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  );
};

export default Router;
