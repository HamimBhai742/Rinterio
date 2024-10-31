import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">
          Oops! The page you're looking for can't be found.
        </p>
        <p className="text-gray-500 mb-12">
          It seems you've hit a broken link or entered a page that doesn't
          exist.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;
