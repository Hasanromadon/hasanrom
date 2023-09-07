import React from 'react';

const PortfolioLinks = ({ links }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Portfolio Links</h2>
      <ul className="list-disc list-inside">
        {links.map((link, index) => (
          <li key={index}>
            <span className='mr-8'>{link.title}</span>
            <a href={link.demo} target='_blank' className="text-blue-500 mr-4 hover:underline" rel="noreferrer">
              Live Demo
            </a><a href={link.github} target='_blank' className="text-blue-500 hover:underline" rel="noreferrer">
              Github
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioLinks;
