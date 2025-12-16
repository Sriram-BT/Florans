import "../Styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">FLORANS TRUST</div>

        <nav className="right-menu">
          <ul>
            <li>About Us</li>
            <li>Programs</li>
            <li>Supporters</li>
            <li>News & Insight</li>
            <li>Join Us</li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
