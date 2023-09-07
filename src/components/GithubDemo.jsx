import React from 'react';

const GithubDemo = ({ githubLink, demoLink }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">GitHub Repository</h2>
      <a href={githubLink} className="text-blue-500 hover:underline block mb-4">
        GitHub Repository
      </a>
      <h2 className="text-xl font-semibold mb-2">Demo</h2>
      <a href={demoLink} className="text-blue-500 hover:underline block">
        Live Demo
      </a>
    </div>
  );
};

export default GithubDemo;
