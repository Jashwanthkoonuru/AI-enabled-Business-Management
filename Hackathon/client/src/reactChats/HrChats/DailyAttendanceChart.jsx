import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const dailyAttendance = [
  { day: "Mon", present: 220, absent: 18 },
  { day: "Tue", present: 225, absent: 15 },
  { day: "Wed", present: 218, absent: 22 },
  { day: "Thu", present: 230, absent: 10 },
  { day: "Fri", present: 215, absent: 25 },
];

const DailyAttendanceChart = () => {
  return (
    <div className=" p-6 rounded-xl shadow h-72">
      <h2 className="text-lg font-semibold mb-4">Daily Attendance Trend</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dailyAttendance}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="present" stroke="#4f46e5" strokeWidth={3} />
          <Line type="monotone" dataKey="absent" stroke="#ef4444" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyAttendanceChart;
