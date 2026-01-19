import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GoalsCompletionChart = ({ data }) => {
  const chartData = {
    labels: data.names,
    datasets: [
      {
        label: "Goals Achieved",
        data: data.goalsAchieved,
        backgroundColor: "#10B981", // Tailwind green-500
      },
      {
        label: "Total Goals",
        data: data.totalGoals,
        backgroundColor: "#3B82F6", // Tailwind blue-500
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} height={250} />
    </div>
  );
};

export default GoalsCompletionChart;
