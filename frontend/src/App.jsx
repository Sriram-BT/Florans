import { Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/register";
import Home from "./Components/home";
import Supporters from "./Components/Supporters";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/supporters" element={<Supporters />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

