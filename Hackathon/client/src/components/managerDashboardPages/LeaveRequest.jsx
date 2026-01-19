import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaUserAlt } from 'react-icons/fa';

const LeaveRequest = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: 'Alice Smith', department: 'IT', days: 2, reason: 'Medical', status: 'Pending' },
    { id: 2, name: 'Bob Jones', department: 'Marketing', days: 1, reason: 'Personal', status: 'Pending' },
    { id: 3, name: 'Carol Lee', department: 'Finance', days: 3, reason: 'Vacation', status: 'Approved' },
    { id: 4, name: 'David Kim', department: 'IT', days: 1, reason: 'Conference', status: 'Rejected' },
  ]);

  const handleLeaveAction = (id, action) => {
    setLeaveRequests(prev =>
      prev.map(lr => (lr.id === id ? { ...lr, status: action } : lr))
    );
  };

  const getStatusColor = status => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Leave Requests</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaveRequests.map(lr => (
          <div
            key={lr.id}
            className={`shadow-lg rounded-xl p-5 flex flex-col justify-between hover:shadow-2xl transition ${getStatusColor(lr.status)}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaUserAlt className="text-2xl" />
              <h3 className="text-lg font-semibold">{lr.name}</h3>
            </div>
            <p className="mb-1"><span className="font-semibold">Department:</span> {lr.department}</p>
            <p className="mb-1"><span className="font-semibold">Days:</span> {lr.days}</p>
            <p className="mb-2"><span className="font-semibold">Reason:</span> {lr.reason}</p>
            <span className="inline-block px-3 py-1 rounded-full mb-3 text-sm font-medium">{lr.status}</span>

            {lr.status === 'Pending' && (
              <div className="flex gap-2 justify-end mt-2">
                <button
                  onClick={() => handleLeaveAction(lr.id, 'Approved')}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleLeaveAction(lr.id, 'Rejected')}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveRequest;
