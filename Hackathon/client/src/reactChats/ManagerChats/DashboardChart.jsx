// Charts.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart, Pie, Cell } from 'recharts';

const sampleAttendance = [
  { day: 'Mon', Present: 8, Absent: 2 },
  { day: 'Tue', Present: 9, Absent: 1 },
  { day: 'Wed', Present: 7, Absent: 3 },
  { day: 'Thu', Present: 8, Absent: 2 },
  { day: 'Fri', Present: 10, Absent: 0 },
];

const samplePerformance = [
  { name: 'Alice', rating: 4.5 },
  { name: 'Bob', rating: 3.8 },
  { name: 'Carol', rating: 4.2 },
  { name: 'David', rating: 4.7 },
];

const pieData = [
  { name: 'Completed', value: 120 },
  { name: 'Pending', value: 30 },
  { name: 'In Progress', value: 50 },
];

const COLORS = ['#4ade80', '#facc15', '#3b82f6'];

const DashboardChart = () => {
  return (
    <div className="grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-5 rounded-xl shadow-lg">
        <h3 className="text-lg font-bold mb-2">Weekly Attendance</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={sampleAttendance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Present" stroke="#4ade80" strokeWidth={2} />
            <Line type="monotone" dataKey="Absent" stroke="#f87171" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Bar Chart */}
      <div className="bg-white p-5 rounded-xl shadow-lg">
        <h3 className="text-lg font-bold mb-2">Team Performance</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={samplePerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="rating" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Task Completion Pie Chart */}
      <div className="bg-white p-5 rounded-xl shadow-lg">
        <h3 className="text-lg font-bold mb-2">Task Status</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
