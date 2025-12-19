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
                        <li onClick={()=>navigate("/")}>Home</li>

            <li onClick={() => navigate("/programs")}>Programs</li>
            <li>Supporters</li>
            <li>Join Us</li>
                        <li>About Us</li>

          </ul>
        </nav>

      </div>
    </header>
  );
}
