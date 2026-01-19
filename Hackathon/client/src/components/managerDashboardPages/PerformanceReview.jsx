import React, { useState } from 'react';
import { FaStar, FaUserAlt, FaChartLine } from 'react-icons/fa';

const PerformanceReview = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Alice Smith', role: 'Developer', department: 'IT', rating: 4.5, feedback: 'Excellent problem-solving skills.' },
    { id: 2, name: 'Bob Jones', role: 'Designer', department: 'Marketing', rating: 3.8, feedback: 'Creative but needs to meet deadlines.' },
    { id: 3, name: 'Carol Lee', role: 'QA Analyst', department: 'IT', rating: 4.2, feedback: 'Great attention to detail.' },
    { id: 4, name: 'David Kim', role: 'Project Manager', department: 'IT', rating: 4.7, feedback: 'Excellent leadership and coordination.' },
  ]);

  // Function to get star color based on rating
  const getStarColor = rating => {
    if (rating >= 4.5) return 'text-green-500';
    if (rating >= 4) return 'text-yellow-500';
    return 'text-gray-400';
  };

  // Color palette for cards
  const cardColors = ['bg-blue-100', 'bg-purple-100', 'bg-green-100', 'bg-yellow-100'];

  return (
    <div className="p-6 min-h-screen ">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaChartLine /> Performance Reviews
      </h2>
      <div className="grid grid-cols-1 text-black  sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-blue-50 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <p className="text-gray-600">Total Reviews</p>
          <p className="text-2xl font-bold">{reviews.length}</p>
        </div>
        <div className="bg-purple-50 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <p className="text-gray-600">Average Rating</p>
          <p className="text-2xl font-bold">
            {(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(2)}
          </p>
        </div>
        <div className="bg-green-50 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <p className="text-gray-600">Top Performer</p>
          <p className="text-xl font-semibold">
            {reviews.reduce((top, r) => (r.rating > top.rating ? r : top), reviews[0]).name}
          </p>
        </div>
        <div className="bg-yellow-50 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <p className="text-gray-600">Lowest Rating</p>
          <p className="text-xl font-semibold">
            {reviews.reduce((low, r) => (r.rating < low.rating ? r : low), reviews[0]).name}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 text-black  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`${cardColors[index % cardColors.length]} shadow-lg rounded-xl p-5 hover:shadow-2xl transition flex flex-col justify-between`}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaUserAlt className="text-2xl text-blue-700" />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-gray-700">{review.role} - {review.department}</p>
              </div>
            </div>

            <div className="mb-2">
              <p className="font-semibold">Rating:</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(review.rating) ? getStarColor(review.rating) : 'text-gray-300'}
                  />
                ))}
                <span className="ml-2 text-gray-700">{review.rating}</span>
              </div>
            </div>

            <p className="mb-2"><span className="font-semibold">Feedback:</span> {review.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceReview;
