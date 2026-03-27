import { useEffect, useState } from "react";
import JobCard from "../../components/jobcard/JobCard";
import { fetchJobs } from "../../services/jobService";
import Loader from "../../components/loader/Loader";
import "./Job.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  const getJobs = async () => {
    try {
      const data = await fetchJobs();
      setJobs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // stop loading after API finishes
    }
  };

  getJobs();
}, []);

  if (loading) {
 return <Loader />;
  }

  return (
    <div className="jobs-container">
      <h1 className="jobs-title">Available Jobs</h1>

      {jobs.length === 0 ? (
        <p className="loading-text">No jobs found</p>
      ) : (
        <div className="jobs-grid">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;