import React, { useMemo } from 'react';
import { Pie, Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from 'chart.js';

// Register chart components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const ReportCharts = ({ reportData }) => {
  const total = useMemo(
    () => reportData.reduce((sum, item) => sum + item.value, 0),
    [reportData]
  );

  const pieData = useMemo(
    () => ({
      labels: reportData.map(item => item.category),
      datasets: [
        {
          data: reportData.map(item => item.value),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        },
      ],
    }),
    [reportData]
  );

  const barData = useMemo(
    () => ({
      labels: reportData.map(item => item.category),
      datasets: [
        {
          label: 'Report Value',
          data: reportData.map(item => item.value),
          backgroundColor: '#36A2EB',
        },
      ],
    }),
    [reportData]
  );

  const lineData = useMemo(
    () => ({
      labels: reportData.map(item => item.category),
      datasets: [
        {
          label: 'Trend',
          data: reportData.map(item => item.value),
          borderColor: '#FF6384',
          backgroundColor: 'rgba(255,99,132,0.2)',
          tension: 0.3,
        },
      ],
    }),
    [reportData]
  );

  const doughnutData = useMemo(
    () => ({
      labels: reportData.map(item => item.category),
      datasets: [
        {
          data: reportData.map(item => item.value),
          backgroundColor: ['#4BC0C0', '#FFCE56', '#36A2EB', '#FF6384'],
        },
      ],
    }),
    [reportData]
  );

  // Chart container style (all charts same size)
  const chartContainerStyle = {
    width: '100%',
    height: '350px', // fixed height
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h2>Total Reports: {total}</h2>

      {/* 2x2 grid layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '30px',
          marginTop: '30px',
        }}
      >
        <div>
          <h3>Pie Chart</h3>
          <div style={chartContainerStyle}>
            <Pie data={pieData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>

        <div>
          <h3>Bar Chart</h3>
          <div style={chartContainerStyle}>
            <Bar
              data={barData}
              options={{
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } },
              }}
            />
          </div>
        </div>

        <div>
          <h3>Line Chart</h3>
          <div style={chartContainerStyle}>
            <Line
              data={lineData}
              options={{
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } },
                scales: { y: { beginAtZero: true } },
              }}
            />
          </div>
        </div>

        <div>
          <h3>Doughnut Chart</h3>
          <div style={chartContainerStyle}>
            <Doughnut data={doughnutData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCharts;
