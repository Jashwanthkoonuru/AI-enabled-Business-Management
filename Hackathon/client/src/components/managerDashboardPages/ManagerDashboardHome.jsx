import React, { useState } from 'react';
import DashboardChart from '../../reactChats/ManagerChats/DashboardChart';
import { FaCheckCircle, FaTimesCircle, FaUserClock, FaFileAlt, FaTasks } from 'react-icons/fa';
const ManagerDashboardHome = () => {
  const [kpis, setKpis] = useState({
    totalEmployees: 20,
    presentToday: 15,
    absentToday: 3,
    lateArrivals: 2,
    pendingLeaves: 4,
    completedTasks: 120,
  });
  return (
    <div className="p-6 min-h-screen space-y-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold ">Welcome Back, Manager!</h1>
        <p className=" mt-1">
          Here's an overview of today's attendance, performance, and tasks.
        </p>
      </header>
      <section className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-green-50 text-green-700 shadow-lg rounded-xl p-5 flex flex-col items-center hover:shadow-2xl transition transform hover:-translate-y-1">
          <FaCheckCircle className="text-green-500 text-3xl mb-2" />
          <p className="font-semibold">Present Today</p>
          <p className="text-2xl font-bold">{kpis.presentToday}</p>
        </div>
        <div className="bg-red-50 text-red-500 shadow-lg rounded-xl p-5 flex flex-col items-center hover:shadow-2xl transition transform hover:-translate-y-1">
          <FaTimesCircle className="text-red-500 text-3xl mb-2" />
          <p className="font-semibold">Absent Today</p>
          <p className="text-2xl font-bold">{kpis.absentToday}</p>
        </div>
        <div className="bg-yellow-50 text-yellow-500 shadow-lg rounded-xl p-5 flex flex-col items-center hover:shadow-2xl transition transform hover:-translate-y-1">
          <FaUserClock className="text-yellow-500 text-3xl mb-2" />
          <p className="font-semibold">Late Arrivals</p>
          <p className="text-2xl font-bold">{kpis.lateArrivals}</p>
        </div>
        <div className="bg-blue-50 text-blue-500 shadow-lg rounded-xl p-5 flex flex-col items-center hover:shadow-2xl transition transform hover:-translate-y-1">
          <FaFileAlt className="text-blue-500 text-3xl mb-2" />
          <p className="font-semibold">Pending Leaves</p>
          <p className="text-2xl font-bold">{kpis.pendingLeaves}</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Analytics & Insights</h2>
        <DashboardChart />
      </section>
      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <button className="bg-blue-100 text-blue-700 rounded-xl p-5 shadow hover:bg-blue-200 transition font-semibold">
          View Attendance
        </button>
        <button className="bg-green-100 text-green-700 rounded-xl p-5 shadow hover:bg-green-200 transition font-semibold">
          Approve Leaves
        </button>
        <button className="bg-yellow-100 text-yellow-800 rounded-xl p-5 shadow hover:bg-yellow-200 transition font-semibold">
          Performance Review
        </button>
        <button className="bg-purple-100 text-purple-700 rounded-xl p-5 shadow hover:bg-purple-200 transition font-semibold">
          Reports & Tasks
        </button>
      </section>
    </div>
  );
};
export default ManagerDashboardHome;
