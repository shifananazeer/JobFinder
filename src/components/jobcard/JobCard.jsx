const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>

      <p className="job-info">Job Type: {job.type}</p>
      <p className="job-info">Work Mode: {job.mode}</p>
      <p className="job-info">Experience: {job.experience}</p>
      <p className="job-info">
        Application Deadline: {job.deadline}
      </p>

      <a href="#" className="apply-link">Apply Now</a>

      <p className="posted-date">
        Posted On: {job.posted}
      </p>
    </div>
  );
};

export default JobCard;