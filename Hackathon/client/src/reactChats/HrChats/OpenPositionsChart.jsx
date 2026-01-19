import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const OpenPositionsChart = () => {
  const data = {
    labels: ["Frontend Developer", "Backend Developer", "Marketing Manager", "Sales Executive", "HR Manager"],
    datasets: [
      {
        label: "Open Positions / Job Openings",
        data: [3, 2, 4, 3, 1],
        backgroundColor: [
          "rgba(99, 102, 241, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(244, 63, 94, 0.7)",
          "rgba(250, 204, 21, 0.7)",
          "rgba(147, 51, 234, 0.7)"
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Open Positions by Role", font: { size: 16 } },
    },
  };

  return <Pie data={data} options={options} />;
};

export default OpenPositionsChart;
