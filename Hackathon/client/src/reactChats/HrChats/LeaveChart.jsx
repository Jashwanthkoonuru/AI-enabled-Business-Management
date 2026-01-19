import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LeaveChart = () => {
  const data = {
    labels: ["Engineering", "Marketing", "Sales", "HR", "Finance"],
    datasets: [
      {
        label: "Leave Requests for Employees",
        data: [5, 3, 2, 4, 1],
        backgroundColor: [
          "rgba(99, 102, 241, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(244, 63, 94, 0.7)",
          "rgba(250, 204, 21, 0.7)",
          "rgba(147, 51, 234, 0.7)"
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Leave Requests by Department", font: { size: 16 } },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 }
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default LeaveChart;
