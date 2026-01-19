// TeamStatusChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TeamStatusChart = ({ active, inactive }) => {
  const data = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        label: 'Team Members',
        data: [active, inactive],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div style={{ width: '400px', margin: '0 auto' }}>
      <Pie data={data} />
    </div>
  );
};

export default TeamStatusChart;
