import { Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/register";
import Home from "./Components/home";
import ProjectsDone from "./Components/projectsDone";
import Header from "./Components/header";

export default function App() {
  return (
    <>
      {/* Header common to all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/programs" element={<ProjectsDone />} />
      </Routes>
    </>
  );
}
