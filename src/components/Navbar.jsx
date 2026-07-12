import { useEffect, useState, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaDice } from "react-icons/fa";
import searchData from "../data/searchData";
import "./Navbar.css";

function Navbar({ heroSelector = ".hero" }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [statesOpen, setStatesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(heroSelector);
      if (!hero) return setShowNavbar(true);
      setShowNavbar(window.scrollY >= hero.offsetHeight - 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [heroSelector]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setStatesOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setStatesOpen(false);
        setSearchOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchTerm("");
      }

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setStatesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const results = useMemo(() => {
    const value = searchTerm.trim().toLowerCase();
    if (!value) return [];

    return Array.from(
      new Map(
        searchData
          .filter(
            (item) =>
              item.title.toLowerCase().includes(value) ||
              item.state.toLowerCase().includes(value) ||
              item.type.toLowerCase().includes(value) ||
              item.keywords.some((k) => k.toLowerCase().includes(value))
          )
          .map((item) => [`${item.title}-${item.path}`, item])
      ).values()
    ).slice(0, 10);
  }, [searchTerm]);

  const closeAll = () => {
    setMenuOpen(false);
    setStatesOpen(false);
    setSearchOpen(false);
    setSearchTerm("");
  };

  const openResult = (item) => {
    navigate(item.path);
    closeAll();
  };

  const handleExplore = () => {
    const random = searchData[Math.floor(Math.random() * searchData.length)];
    navigate(random.path);
    closeAll();
  };

  const navLink = (to, label) => (
    <li>
      <Link to={to} onClick={closeAll}>
        {label}
      </Link>
    </li>
  );

  return (
    <nav className={`navbar ${showNavbar ? "scrolled" : ""}`} ref={menuRef}>
      <Link to="/" className="logo" onClick={closeAll}>
        Deccan<span>Central</span>
      </Link>

      <ul
        id="main-nav"
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        {navLink("/", "Home")}

        <li className="dropdown">
          <button
            className="dropdown-toggle"
            aria-expanded={statesOpen}
            onClick={() => setStatesOpen((v) => !v)}
          >
            States ▾
          </button>

          <ul className={`dropdown-menu ${statesOpen ? "show" : ""}`}>
            <li><Link to="/karnataka" onClick={closeAll}>Karnataka</Link></li>
            <li><Link to="/kerala" onClick={closeAll}>Kerala</Link></li>
            <li><Link to="/tamil-nadu" onClick={closeAll}>Tamil Nadu</Link></li>
            <li><Link to="/telangana" onClick={closeAll}>Telangana</Link></li>
            <li><Link to="/andhra-pradesh" onClick={closeAll}>Andhra Pradesh</Link></li>
          </ul>
        </li>

        {navLink("/about", "About")}
        {navLink("/contact", "Contact")}
      </ul>

      <div className="navbar-actions">
        <div className="search-container" ref={searchRef}>
          <button
            className="search-btn"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
          >
            🔍
          </button>

          {searchOpen && (
            <div className="search-dropdown">
              <input
                autoFocus
                placeholder="Search Deccan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <ul>
                {results.map((item, index) => (
                  <li
                    key={`${item.title}-${item.path}-${index}`}
                    onClick={() => openResult(item)}
                  >
                    <strong>{item.title}</strong>
                    <small>{item.type} • {item.state}</small>
                  </li>
                ))}
              </ul>

              {searchTerm.trim() && results.length === 0 && (
                <p className="no-results">No discoveries found</p>
              )}
            </div>
          )}
        </div>

        <button className="explore-btn" onClick={handleExplore}>
          <FaDice />
          <span>Explore</span>
        </button>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;