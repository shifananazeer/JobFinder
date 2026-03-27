import "./JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2 className="job-title">{job.title}</h2>
      <p className="job-company">{job.company}</p>
      <p className="job-location">{job.location}</p>

      <p className="job-desc">
        {job.description?.slice(0, 80)}...
      </p>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;