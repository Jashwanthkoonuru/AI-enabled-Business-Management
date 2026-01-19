
import React, { useState } from "react";
import PerformanceChart from "../../reactChats/PerformanceChat";
const performanceData = {
  daily: [
    { date: "Mar 12", tasks: 0, rating: 0, attendance: 0 },
    { date: "Mar 13", tasks: 0, rating: 0, attendance: 0 },
    { date: "Mar 14", tasks: 0, rating: 0, attendance: 0 },
    { date: "Mar 15", tasks: 0, rating: 0, attendance: 0 },
  ],
  last8Weeks: [
    { week: "Week 1", rating: 5, tasks: 10, behavior: 70 },
    { week: "Week 2", rating: 7, tasks: 8, behavior: 80 },
    { week: "Week 3", rating: 6, tasks: 9, behavior: 60 },
    { week: "Week 4", rating: 8, tasks: 12, behavior: 90 },
  ],
  monthly: [
    { month: "Jan", rating: 7, tasks: 40, behavior: 80 },
    { month: "Feb", rating: 6, tasks: 35, behavior: 75 },
    { month: "Mar", rating: 8, tasks: 45, behavior: 85 },
  ],
};
const MyPerformance = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const renderCard = () => {
    let data = [];
    if (activeTab === "daily") data = performanceData.daily;
    else if (activeTab === "last8Weeks") data = performanceData.last8Weeks;
    else data = performanceData.monthly;
    return (
      <div className="bg-blue-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 mb-3 border border-blue-100 dark:border-gray-700 rounded-lg last:mb-0 transition-colors duration-300 bg-white dark:bg-gray-900"
          >
            <div className="flex flex-col mb-2 sm:mb-0">
              <p className="font-bold text-lg mb-1 text-gray-800 dark:text-gray-100">
                {activeTab === "daily"
                  ? item.date
                  : activeTab === "last8Weeks"
                  ? item.week
                  : item.month}
              </p>
              <p className="text-gray-600 dark:text-gray-300">{item.tasks} tasks completed</p>
            </div>
            <div className="flex flex-col text-left sm:text-right">
              <p className="text-gray-700 dark:text-gray-200">Rating: {item.rating}/10</p>
              {activeTab === "daily" ? (
                <p className="text-gray-700 dark:text-gray-200">Attendance: {item.attendance}%</p>
              ) : (
                <p className="text-gray-700 dark:text-gray-200">Behavior: {item.behavior}/100</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="p-2 sm:p-6 min-h-screen dark:bg-gray-900 transition-colors duration-300">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 dark:text-white">
            My Performance
          </h1>
          <div className="w-full bg-white shadow-md rounded-lg border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                📊 Current Performance Period:
            </h2>
            <p className="text-gray-700 text-1xl mb-2">
                <span className="font-smaller text-gray-500">
                24th Feb – 23rd Mar (28 days)</span>
            </p>
            <p className="text-blue-500 text-base">
                Your performance is tracked from the <span className="font-medium">24th of last month to the 23rd of the current month</span>.
            </p>
        </div>
        <div className="mt-6 flex flex-wrap sm:flex-nowrap gap-4 mb-6">
            {["daily", "last8Weeks", "monthly"].map((tab) => (
            <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeTab === tab
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
            >
                {tab === "daily"
                ? "Daily"
                : tab === "last8Weeks"
                ? "Last 8 Weeks"
                : "Monthly"}
            </button>
            ))}
        </div>
        {renderCard()}
        <PerformanceChart activeTab={activeTab} />
        
    </div>
  );
};

export default MyPerformance;
