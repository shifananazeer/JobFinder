## JobFinder - Job Listing Application

## Overview

JobFinder is a modern and responsive job listing application built using React. It allows users to browse available jobs, view details, and explore opportunities easily.


## Features
 Homepage with Hero Section
 Job Listings (API Integration)
 About Page
 Loading Spinner (Reusable Component)
 Fully Responsive Design
 Clean Component Structure
 Environment-based API configuration

## Tech Stack
React.js
React Router DOM
Custom CSS
Vite
JavaScript (ES6+)


## Project Structure
src/
 ├── components/
 │    ├── navbar
 │    │    ├──Navbar.jsx
 │    │    ├──Navbar.css
 │    ├── jobCard
 │    │     ├──JobCard.jsx
 │    │     ├──JobCard.css
 │    └── loader
 │       ├──Loader.jsx
 │       ├──Loader.css
 │
 ├── pages/
 │    ├── home
 │    │     ├──Home.jsx
 │    │     ├──Home.css
 │    ├── job
 │    │    ├──Jobs.jsx
 │    │    ├──Jobs.css
 │    └── about
 │         ├──About.jsx
 │         ├──About.css
 │
 ├── services/
 │    └── jobService.js
 │
 ├── App.jsx
 └── main.jsx


## API Used
Remotive Jobs API
https://remotive.com/api/remote-jobs


Installation & Setup
# Clone the repository
git clone <repo-link>

# Navigate to project
cd JobFinder

# Install dependencies
npm install

# Run the app
npm run dev