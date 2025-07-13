import React from "react";

const PortfolioLinks = ({ links }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((link) => (
        <div
          key={link.title}
          className="border rounded-xl p-5 shadow-md hover:shadow-lg transition duration-200 bg-white"
        >
          <h2 className="text-lg font-semibold text-gray-800">{link.title}</h2>
          <p className="text-sm text-gray-600 mt-2">{link.description}</p>
          <div className="flex gap-4 mt-4">
            <a
              href={link.demo}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            {link.github && (
              <a
                href={link.github}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioLinks;
