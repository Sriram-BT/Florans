import { useState } from "react";
import axios from "axios";
import "../Styles/Auth.css";    // reuse same styling
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/auth/register", form);
    alert(res.data.message);
    navigate("/"); // redirect to login after registration
  };

  return (
    <div className="auth-page">
      <header className="home-container">

        <h1>Create Account</h1>
        <p>Please fill the details to register</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            placeholder="Name"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Phone"
            required
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button type="submit" className="primary-btn">
            Register
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>Already have an account?</p>
        <button className="dark-btn" onClick={() => navigate("/")}>
          Login
        </button>
      </header>
    </div>
  );
}
