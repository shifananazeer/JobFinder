import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div>
        <div className="loader"></div>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;