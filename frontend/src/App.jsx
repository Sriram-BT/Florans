import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/register";
import Home from "./Components/home";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
