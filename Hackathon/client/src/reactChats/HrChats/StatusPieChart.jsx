import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const statusData = [
  { name: "Present", value: 221 },
  { name: "Absent", value: 19 },
  { name: "Late", value: 8 },
];

const COLORS = ["#4f46e5", "#ef4444", "#f59e0b"];

const StatusPieChart = () => {
  return (
    <div className=" p-4 rounded-xl shadow-2xl h-72">
      <h2 className="text-lg font-semibold mb-4">Today Status</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={statusData} dataKey="value" nameKey="name" outerRadius={90}>
            {statusData.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusPieChart;
