import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Overlay */}
      <div className="home-overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1 className="home-title">
          Find Your Dream Job Easily
        </h1>

        <p className="home-desc">
          Discover thousands of job opportunities with top companies. 
          Start your career journey today with NextHire.
        </p>

        <div className="home-buttons">
          <button
            onClick={() => navigate("/jobs")}
            className="primary-btn"
          >
            Browse Jobs
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;