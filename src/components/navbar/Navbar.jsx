import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Left */}
      <div className="navbar-left">
        <img src="/job.jpg" alt="logo" className="logo" />
        <h1 className="brand">JobFinder</h1>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
         <Link to="/about">About</Link>
      </div>

      {/* Right Buttons */}
      <div className="nav-right">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>

      {/* Hamburger */}
      <div 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
          <button className="login-btn">Login</button>
          <button className="signup-btn">Signup</button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;