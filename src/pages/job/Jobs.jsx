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
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="jobs-wrapper">

      {/* HEADER */}
      <div className="jobs-header">
        <div>
          <h2>Top job picks for you</h2>
          <p>
            Based on your profile, preferences and recent activity
          </p>
        </div>

        <button className="page-btn">Page 1 of 1</button>
      </div>

      {/* JOB LIST */}
      <div className="jobs-list">
        {jobs.length === 0 ? (
          <p className="no-jobs">No jobs found</p>
        ) : (
          jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </div>

    </div>
  );
};

export default Jobs;