import { Routes, Route } from "react-router-dom";

import Header from "./Components/header";
import Home from "./Components/home";
import Login from "./Components/login";
import Register from "./Components/register";
import Supporters from "./Components/Supporters";
import ProjectsDone from "./Components/projectsDone";
import AboutUs from "./Components/about";
import Footer from "./Components/footer"

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supporters" element={<Supporters />} />
        <Route path="/programs" element={<ProjectsDone />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
            <Footer />

    </>
  );
}
