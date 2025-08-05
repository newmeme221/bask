import React from 'react';
import JobApplicationForm from '../components/JobApplicationForm';

const JobApplication = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Career Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join BASK Engineering and be part of a team that's shaping the future of engineering. 
            We offer competitive benefits, professional growth opportunities, and a collaborative work environment.
          </p>
        </div>
        <JobApplicationForm />
      </div>
    </div>
  );
};

export default JobApplication;


