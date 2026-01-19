import React, { useState } from 'react';
import { FaUsers, FaFileAlt, FaClock, FaChartPie } from 'react-icons/fa';

const Reports = () => {
  const [reportData, setReportData] = useState({
    totalEmployees: 50,
    totalLeaves: 12,
    totalHoursWorked: 420,
    topDepartments: [
      { department: 'IT', completedTasks: 120 },
      { department: 'Marketing', completedTasks: 90 },
      { department: 'Finance', completedTasks: 70 },
    ],
  });

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaChartPie /> Reports
      </h2>
      <div className="grid grid-cols-1 text-black  sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-blue-100 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <FaUsers className="text-3xl text-blue-600 mb-2" />
          <p className="text-gray-700">Total Employees</p>
          <p className="text-2xl font-bold">{reportData.totalEmployees}</p>
        </div>
        <div className="bg-green-100 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <FaFileAlt className="text-3xl text-green-600 mb-2" />
          <p className="text-gray-700">Leaves This Month</p>
          <p className="text-2xl font-bold">{reportData.totalLeaves}</p>
        </div>
        <div className="bg-yellow-100 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <FaClock className="text-3xl text-yellow-600 mb-2" />
          <p className="text-gray-700">Total Hours Worked</p>
          <p className="text-2xl font-bold">{reportData.totalHoursWorked}</p>
        </div>
        <div className="bg-purple-100 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <FaChartPie className="text-3xl text-purple-600 mb-2" />
          <p className="text-gray-700">Top Department</p>
          <p className="text-2xl font-bold">{reportData.topDepartments[0].department}</p>
        </div>
      </div>
      <div className="bg-white shadow-lg text-black rounded-xl p-5 mt-6">
        <h3 className="text-xl font-semibold mb-4">Department Performance</h3>
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Completed Tasks</th>
              <th className="px-4 py-2 text-left">Percentage Contribution</th>
            </tr>
          </thead>
          <tbody>
            {reportData.topDepartments.map((dept, idx) => {
              const totalTasks = reportData.topDepartments.reduce((sum, d) => sum + d.completedTasks, 0);
              const percentage = ((dept.completedTasks / totalTasks) * 100).toFixed(1);
              return (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{dept.department}</td>
                  <td className="px-4 py-2">{dept.completedTasks}</td>
                  <td className="px-4 py-2">{percentage}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
