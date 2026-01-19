import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceTrendChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Avg Rating",
        data: data.ratings,
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} height={250} />
    </div>
  );
};

export default PerformanceTrendChart;
