import { useState } from "react";
import { FaUserAlt, FaStar, FaChartLine } from "react-icons/fa";
import PerformanceTrendChart from "../../reactChats/HrChats/PerformanceTrendChart";
import GoalsCompletionChart from "../../reactChats/HrChats/GoalsCompletionChart";

const initialEmployees = [
  { id: 1, name: "John Doe", department: "Engineering", rating: 4.5, goalsAchieved: 8, totalGoals: 10 },
  { id: 2, name: "Sara Smith", department: "Marketing", rating: 4.0, goalsAchieved: 6, totalGoals: 8 },
  { id: 3, name: "Mike Johnson", department: "Sales", rating: 3.8, goalsAchieved: 7, totalGoals: 10 },
];

const PerformanceManagement = () => {
  const [employees] = useState(initialEmployees);

  const trendData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    ratings: [4.2, 4.3, 4.1, 4.5, 4.4, 4.3, 4.5],
  };

  const goalsData = {
    names: employees.map(e => e.name),
    goalsAchieved: employees.map(e => e.goalsAchieved),
    totalGoals: employees.map(e => e.totalGoals),
  };

  return (
    <div className="space-y-6">

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-indigo-500 text-white rounded-xl shadow p-6 flex justify-between items-center hover:scale-105 transition transform">
          <div>
            <p className="text-sm flex items-center gap-2"><FaStar /> Avg Rating</p>
            <p className="text-3xl font-bold">
              {(employees.reduce((acc, e) => acc + e.rating, 0) / employees.length).toFixed(1)}
            </p>
          </div>
        </div>

        <div className="bg-green-500 text-white rounded-xl shadow p-6 flex justify-between items-center hover:scale-105 transition transform">
          <div>
            <p className="text-sm flex items-center gap-2"><FaChartLine /> Total Goals Achieved</p>
            <p className="text-3xl font-bold">
              {employees.reduce((acc, e) => acc + e.goalsAchieved, 0)}
            </p>
          </div>
        </div>

        <div className="bg-yellow-400 text-white rounded-xl shadow p-6 flex justify-between items-center hover:scale-105 transition transform">
          <div>
            <p className="text-sm flex items-center gap-2"><FaUserAlt /> Total Employees</p>
            <p className="text-3xl font-bold">{employees.length}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceTrendChart data={trendData} />
        <GoalsCompletionChart data={goalsData} />
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
          <FaUserAlt className="text-indigo-600" /> Employee Performance
        </h2>

        <div className="space-y-4">
          {employees.map(emp => (
            <div key={emp.id} className="flex flex-col sm:flex-row justify-between items-center border p-4 rounded-lg hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <FaUserAlt className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-black">{emp.name}</p>
                  <p className="text-sm text-gray-500">{emp.department}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 sm:mt-0">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold text-black">{emp.rating}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{emp.goalsAchieved} / {emp.totalGoals} Goals Achieved</p>
                  <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: `${(emp.goalsAchieved / emp.totalGoals) * 100}%` }} />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PerformanceManagement;
