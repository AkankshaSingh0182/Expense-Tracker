import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MonthlyTotalsChart = () => {
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Monthly Totals',
        data: [1940, 1966, 1922, 1867, 1827, 1775, 1838, 1737, 1680, 1647, 1669, null],
        fill: false,
        borderColor: '#007bff',
        tension: 0.2,
        pointBackgroundColor: '#007bff',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Monthly Totals',
        font: { size: 20 },
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y.toFixed(2)}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => `$${value.toFixed(2)}`
        }
      }
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} /><br></br>
      <button type="Add">Add New Expense</button>
    </div>
  );
};

export default MonthlyTotalsChart;