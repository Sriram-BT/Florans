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
            <li>About Us</li>
            <li>Programs</li>
              <li onClick={() => navigate("/supporters")}>Supporters</li>
            <li>News & Insight</li>
            <li>Join Us</li>
          </ul>
        </nav>

      </div>
      
    </header>
  );
}
