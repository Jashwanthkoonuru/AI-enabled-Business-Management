
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const chartDataMap = {
  daily: (data) =>
    data.map((item) => ({
      name: item.date,
      Tasks: item.tasks,
      Rating: item.rating,
      Attendance: item.attendance,
    })),
  last8Weeks: (data) =>
    data.map((item) => ({
      name: item.week,
      Tasks: item.tasks,
      Rating: item.rating,
      Behavior: item.behavior,
    })),
  monthly: (data) =>
    data.map((item) => ({
      name: item.month,
      Tasks: item.tasks,
      Rating: item.rating,
      Behavior: item.behavior,
    })),
};

const PerformanceChart = ({ activeTab }) => {
  // Example data (replace with props or API data)
  const performanceData = {
    daily: [
      { date: "Mar 12", tasks: 3, rating: 7, attendance: 90 },
      { date: "Mar 13", tasks: 4, rating: 8, attendance: 100 },
      { date: "Mar 14", tasks: 2, rating: 6, attendance: 80 },
      { date: "Mar 15", tasks: 5, rating: 9, attendance: 95 },
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

  const chartData = chartDataMap[activeTab](performanceData[activeTab]);

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        {activeTab === "daily"
          ? "Daily Performance Chart"
          : activeTab === "last8Weeks"
          ? "Performance Chart (Last 8 Weeks)"
          : "Monthly Performance Chart"}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" stroke="#6b7280" /> {/* gray-500 for dark/light */}
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px", border: "1px solid #d1d5db" }}
            itemStyle={{ color: "#1f2937" }}
          />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Tasks"
            stroke="#3b82f6"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line type="monotone" dataKey="Rating" stroke="#f97316" strokeWidth={2} />
          {activeTab !== "daily" && <Line type="monotone" dataKey="Behavior" stroke="#10b981" strokeWidth={2} />}
          {activeTab === "daily" && <Line type="monotone" dataKey="Attendance" stroke="#ef4444" strokeWidth={2} />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
