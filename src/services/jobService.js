export const fetchJobs = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_JOBS_API);
    const result = await response.json();

    // Remotive API returns jobs inside "jobs"
    return result.jobs.slice(0, 12).map((job) => ({
      id: job.id,
      title: job.title,
      company: job.company_name,
      location: job.candidate_required_location,
      type: job.job_type,
    }));

  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};