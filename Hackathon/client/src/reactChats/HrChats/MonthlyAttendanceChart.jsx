import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const monthlyAttendance = [
  { month: "Jan", present: 4800 },
  { month: "Feb", present: 4600 },
  { month: "Mar", present: 5000 },
  { month: "Apr", present: 5200 },
];

const MonthlyAttendanceChart = () => {
  return (
    <div className=" p-6 rounded-xl shadow h-72">
      <h2 className="text-lg font-semibold mb-4">Monthly Attendance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={monthlyAttendance}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="present" fill="#4f46e5" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyAttendanceChart;
