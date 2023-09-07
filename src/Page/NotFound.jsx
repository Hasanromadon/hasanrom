import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

const navigate = useNavigate();
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">404 - Not Found</h1>
        <p className="text-gray-600 mb-4">Oops! The page you're looking for doesn't exist.</p>
        <button onClick={()=> navigate('/')} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
