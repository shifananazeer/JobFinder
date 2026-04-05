import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* LEFT */}
      <div className="footer-left">
        <span className="footer-logo">Logo</span>
        <span className="footer-year">2025</span>
      </div>

      {/* CENTER LINKS */}
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Accessibility</a>
        <a href="#">User Agreement</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Copyright Policy</a>
        <a href="#">Guest Controls</a>
        <a href="#">Community Guidelines</a>
        <a href="#">Languages ▼</a>
      </div>

    </footer>
  );
};

export default Footer;