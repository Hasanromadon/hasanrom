import React from 'react';

const Card = ({
  icon, title, content
}) => {
  const gradientBackground = {
    background: 'linear-gradient(45deg, #f9fffd, #fbfbfb)',
    // Add any other styles you need here
  };

  return (
    <div
      className="relative bg-white border border-blue-50 rounded-lg px-6 pt-10 pb-6 shadow-lg shadow-blue-100 hover:shadow-blue-200"
      style={gradientBackground}
    >
      <div className='absolute -top-6 left-6'>
        <img src={icon} alt='' className='w-12' />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

export default Card;
