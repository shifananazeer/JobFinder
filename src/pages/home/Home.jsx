import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-left">
          <h1>
            Zecpath AI hiring <span>platform</span>
          </h1>

          <h2>
            Find your <span className="highlight">Dream Job</span>
          </h2>

          <p>
            ZECPATH is AI-powered hiring platform that makes recruitment faster,
            smarter and effortless. Find your dream job or hire the perfect
            candidate with smart screening, voice interviews, and automated scheduling.
          </p>

          <div className="search-box">
            <input type="text" placeholder="Search job title..." />
            <button>🔍</button>
          </div>

          <p className="sub-text">
            Search jobs from top <span>Companies</span>
          </p>
        </div>

        <div className="hero-right">
          <img src="/hero.png" alt="AI Hiring" />
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <h2>
          Powerful <span>Features</span> For Smarter Hiring
        </h2>

        <div className="feature-cards">
          <div className="card">
            <h3>AI Smart Ranking</h3>
            <p>Find top candidates instantly using AI resume parsing.</p>
          </div>

          <div className="card">
            <h3>AI Voice Interviews</h3>
            <p>Automated screening with intelligent AI agents.</p>
          </div>

          <div className="card">
            <h3>Smart Scheduling</h3>
            <p>Automated interview scheduling with reminders.</p>
          </div>

          <div className="card">
            <h3>Admin Analytics</h3>
            <p>Track hiring performance and insights in real-time.</p>
          </div>
        </div>
      </div>

      {/* STEPS */}
      <div className="steps">
        <h2>How Zecpath Simplifies Hiring</h2>

        <div className="step-cards">
          <div className="step">
            <p>Create Profile</p>
          </div>
          <div className="step">
            <p>AI Screening</p>
          </div>
          <div className="step active">
            <p>Interview</p>
          </div>
          <div className="step">
            <p>Get Hired</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Ready to Launch Your Career?</h2>
        <p>
          Join 10,000+ professionals who found their dream jobs through Zecpath
        </p>

        <button onClick={() => navigate("/register")}>
          Create your Profile
        </button>
      </div>

    </div>
  );
};

export default Home;