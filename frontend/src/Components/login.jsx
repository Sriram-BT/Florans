import { useState } from "react";
import axios from "axios";
import "../Styles/Auth.css";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/auth/login", form);
    alert(res.data.message);
    localStorage.setItem("token", res.data.token);
  };

  return (
    <div className="auth-page">
      <header className="home-container">

        <h1>WELCOME TO FLORANS TRUST</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>Don't have an account?</p>
        <button className="dark-btn" onClick={() => navigate("/register")}>
          Create Account
        </button>
      </header>
    </div>
  );
}
