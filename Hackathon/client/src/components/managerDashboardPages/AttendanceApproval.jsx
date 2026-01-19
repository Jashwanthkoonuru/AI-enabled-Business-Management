import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaUserClock, FaFileAlt, FaClock } from 'react-icons/fa';

const AttendancePortal = () => {
  const [employees, setEmployees] = useState([
    { id: 101, name: 'Alice Smith', department: 'IT', status: 'Present', checkIn: '09:05', checkOut: '', hours: 0 },
    { id: 102, name: 'Bob Jones', department: 'Marketing', status: 'Absent', checkIn: '', checkOut: '', hours: 0 },
    { id: 103, name: 'Carol Lee', department: 'IT', status: 'Late', checkIn: '09:30', checkOut: '', hours: 0 },
    { id: 104, name: 'David Kim', department: 'Finance', status: 'Present', checkIn: '08:55', checkOut: '', hours: 0 },
  ]);

  const [leaveRequests, setLeaveRequests] = useState([
    { id: 201, name: 'Eve White', department: 'IT', days: 2, reason: 'Medical', status: 'Pending' },
    { id: 202, name: 'Frank Black', department: 'Marketing', days: 1, reason: 'Personal', status: 'Pending' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setEmployees(prev =>
        prev.map(emp => {
          if (emp.status === 'Present' || emp.status === 'Late') {
            const checkInHour = parseInt(emp.checkIn?.split(':')[0] || 9);
            const now = new Date();
            const workedHours = now.getHours() - checkInHour;
            return { ...emp, hours: workedHours > 0 ? workedHours : 0 };
          }
          return emp;
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const totalEmployees = employees.length;
  const presentCount = employees.filter(e => e.status === 'Present').length;
  const absentCount = employees.filter(e => e.status === 'Absent').length;
  const lateCount = employees.filter(e => e.status === 'Late').length;
  const pendingLeaves = leaveRequests.filter(l => l.status === 'Pending').length;

  const handleLeaveAction = (id, action) => {
    setLeaveRequests(prev =>
      prev.map(lr => (lr.id === id ? { ...lr, status: action } : lr))
    );
  };

  const filteredEmployees = employees.filter(
    e =>
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statusColors = {
    Present: 'bg-green-500 text-green-700',
    Absent: 'bg-red-500 text-red-800',
    Late: 'bg-yellow-500 text-yellow-800',
  };

  return (
    <div className="p-6  min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-400 to-green-600 shadow-lg rounded-xl p-6 flex flex-col items-center text-white hover:shadow-2xl transition">
          <FaCheckCircle className="text-4xl mb-3" />
          <p className="font-medium">Present Today</p>
          <p className="text-2xl font-bold">{presentCount}</p>
        </div>
        <div className="bg-gradient-to-r from-red-400 to-red-600 shadow-lg rounded-xl p-6 flex flex-col items-center text-white hover:shadow-2xl transition">
          <FaTimesCircle className="text-4xl mb-3" />
          <p className="font-medium">Absent Today</p>
          <p className="text-2xl font-bold">{absentCount}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg rounded-xl p-6 flex flex-col items-center text-white hover:shadow-2xl transition">
          <FaUserClock className="text-4xl mb-3" />
          <p className="font-medium">Late Arrivals</p>
          <p className="text-2xl font-bold">{lateCount}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg rounded-xl p-6 flex flex-col items-center text-white hover:shadow-2xl transition">
          <FaFileAlt className="text-4xl mb-3" />
          <p className="font-medium">Pending Leaves</p>
          <p className="text-2xl font-bold">{pendingLeaves}</p>
        </div>
      </div>
      <div className="mb-6 flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search by employee or department..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map(emp => (
          <div key={emp.id} className={`shadow-lg rounded-xl p-5 flex flex-col justify-between hover:shadow-xl transition ${statusColors[emp.status]}`}>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">{emp.name}</h3>
              <span className="px-3 py-1 rounded-full text-sm bg-white text-gray-800">{emp.status}</span>
            </div>
            <p className="text-white mb-1">Department: {emp.department}</p>
            <p className="flex items-center text-white gap-2"><FaClock /> Check-In: {emp.checkIn || '-'}</p>
            <p className="flex items-center text-white gap-2"><FaClock /> Check-Out: {emp.checkOut || '-'}</p>
            <p className="mt-2 font-medium text-white">Hours Worked: {emp.hours}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Pending Leave Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaveRequests.filter(lr => lr.status === 'Pending').map(lr => (
            <div key={lr.id} className="bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg rounded-xl p-5 flex flex-col justify-between hover:shadow-xl transition text-white">
              <div>
                <h3 className="font-semibold text-lg">{lr.name}</h3>
                <p>{lr.department}</p>
                <p>Days: {lr.days}</p>
                <p>Reason: {lr.reason}</p>
              </div>
              <div className="mt-4 flex gap-3 justify-end">
                <button
                  className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
                  onClick={() => handleLeaveAction(lr.id, 'Approved')}
                >
                  Approve
                </button>
                <button
                  className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
                  onClick={() => handleLeaveAction(lr.id, 'Rejected')}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendancePortal;
