import React, { useMemo } from "react";
import ReportCharts from "../../reactChats/UserChat";
import { 
  FaTasks, 
  FaCalendarCheck, 
  FaProjectDiagram, 
  FaTrophy, 
} from 'react-icons/fa';
const Dashboard = () => {
  const userData = [
    { title: 'My Tasks', value: 120, icon: <FaTasks size={30} className="text-white" /> },
    { title: 'Attendance', value: 90, icon: <FaCalendarCheck size={30} className="text-white" /> },
    { title: 'Projects', value: 150, icon: <FaProjectDiagram size={30} className="text-white" /> },
    { title: 'Performance', value: 70, icon: <FaTrophy size={30} className="text-white" /> },
  ];
  const gradients = [
    'from-green-400 to-teal-500',
    'from-blue-400 to-indigo-500',
    'from-yellow-400 to-orange-500',
    'from-pink-400 to-red-500',
    'from-purple-400 to-indigo-600',
  ];

  return (
    <div className="dashboard">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {userData.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${gradients[index]} shadow-2xl rounded-xl p-6 flex items-center hover:scale-105 transform transition-transform`}
            >
              <div className="flex items-center space-x-3">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReportCharts reportData={userData.map(item => ({ category: item.title, value: item.value }))} />
    </div>
  );
};

export default Dashboard;
