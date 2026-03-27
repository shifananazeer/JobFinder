import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      
      <div className="about-content">
        <h1 className="about-title">
          About <span className="about-highlight">JobFinder</span>
        </h1>

        <p className="about-text">
          JobFinder is a modern job listing platform designed to help job seekers 
          find the best opportunities quickly and easily. We connect talented 
          individuals with top companies across the world.
        </p>

        <p className="about-text">
          Our goal is to simplify the job search process with a clean interface, 
          real-time job listings, and a seamless user experience.
        </p>
      </div>

    </div>
  );
};

export default About;