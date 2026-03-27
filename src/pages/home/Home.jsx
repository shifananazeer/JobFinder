import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  page loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Show loader
  if (loading) {
    return <Loader />;
  }

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

          <button 
            onClick={() => navigate("/about")}
            className="secondary-btn"
          >
            Learn More
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;