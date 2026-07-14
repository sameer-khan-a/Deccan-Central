import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">

            <p className="footer-tag">
              THE HEART OF SOUTH INDIA
            </p>

            <Link
              to="/"
              className="footer-logo"
              onClick={handleHomeClick}
            >
              DECCAN <span>CENTRAL</span>
            </Link>

            <p className="footer-description">
              Discover the kingdoms, cultures, architecture,
              cuisine, landscapes, wildlife, and stories that
              have shaped the Deccan for thousands of years.
            </p>

          </div>

          <div className="footer-nav">

            <div className="footer-column">
              <h3>Explore States</h3>

              <Link to="/karnataka">Karnataka</Link>
              <Link to="/telangana">Telangana</Link>
              <Link to="/andhra-pradesh">Andhra Pradesh</Link>
              <Link to="/tamil-nadu">Tamil Nadu</Link>
              <Link to="/kerala">Kerala</Link>
            </div>

            <div className="footer-column">
              <h3>Navigate</h3>

              <Link
                to="/"
                onClick={handleHomeClick}
              >
                Home
              </Link>

              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>

              <a
                href="https://github.com/sameer-khan-a/Deccan-Central.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Deccan Central. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <Link
              to="/"
              onClick={handleHomeClick}
            >
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
