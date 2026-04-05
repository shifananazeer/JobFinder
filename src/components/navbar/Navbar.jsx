import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="navbar-left">
        <span className="brand">ZECPATH.</span>
      </div>

      {/* CENTER LINKS */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/about">About</Link>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="nav-right">
        <button 
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button 
          className="signup-btn"
          onClick={() => navigate("/register")}
        >
          Signup
        </button>
      </div>

      {/* HAMBURGER */}
      <div 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Find Jobs</Link>
          <Link to="/companies" onClick={() => setMenuOpen(false)}>Companies</Link>
          <Link to="/salaries" onClick={() => setMenuOpen(false)}>Salaries</Link>
          <Link to="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>

          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Signup</button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;