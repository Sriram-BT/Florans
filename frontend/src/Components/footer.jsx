import '../Styles/footer.css';


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const sponsors = [
  { name: 'Sponsor 1', logo: 'https://via.placeholder.com/120x40/374151/ffffff?text=Sponsor+1' },
  { name: 'Sponsor 2', logo: 'https://via.placeholder.com/120x40/374151/ffffff?text=Sponsor+2' },
  { name: 'Sponsor 3', logo: 'https://via.placeholder.com/120x40/374151/ffffff?text=Sponsor+3' },
  { name: 'Sponsor 4', logo: 'https://via.placeholder.com/120x40/374151/ffffff?text=Sponsor+4' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { name: 'Web Design', href: '/services/web-design' },
  { name: 'Development', href: '/services/development' },
  { name: 'Marketing', href: '/services/marketing' },
  { name: 'Consulting', href: '/services/consulting' },
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* Sponsors */}
      <div className="sponsors-section">
        <div className="container">
          <p className="sponsors-title">Our Trusted Sponsors</p>
          <div className="sponsors-grid">
            {sponsors.map((s, i) => (
              <div key={i} className="sponsor-item">
                <img src={s.logo} alt={s.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-column">
              <h3 className="brand-name">YourBrand</h3>
              <p className="brand-description">
                We create amazing digital experiences that help businesses grow.
              </p>

              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
                  <FacebookIcon fontSize="small" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
                  <InstagramIcon fontSize="small" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
                  <YouTubeIcon fontSize="small" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="column-title">Quick Links</h4>
              <ul className="link-list">
                {quickLinks.map((l, i) => (
                  <li key={i}>
                    <a href={l.href} className="footer-link">{l.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-column">
              <h4 className="column-title">Services</h4>
              <ul className="link-list">
                {serviceLinks.map((l, i) => (
                  <li key={i}>
                    <a href={l.href} className="footer-link">{l.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h4 className="column-title">Contact Us</h4>
              <ul className="contact-list">
                <li>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="contact-link">
                    <LocationOnIcon fontSize="small" />
                    <span>123 Business Street, NY 10001</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@yourbrand.com" className="contact-link">
                    <MailIcon fontSize="small" />
                    <span>contact@yourbrand.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="contact-link">
                    <PhoneIcon fontSize="small" />
                    <span>+1 (234) 567-890</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
