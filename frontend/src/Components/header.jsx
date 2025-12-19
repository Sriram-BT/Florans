import "../Styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">FLORANS TRUST</div>

        <nav className="right-menu">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About Us</li>
            <li onClick={() => navigate("/programs")}>Programs</li>
            <li onClick={() => navigate("/supporters")}>Supporters</li>
            <li>News & Insight</li>
            <li>Join Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
