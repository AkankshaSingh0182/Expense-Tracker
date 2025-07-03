import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, CartesianGrid } from 'recharts';

const expenseDataByCategory = [
  { category: 'Bills', amount: 7000 },
  { category: 'Education', amount: 15500 },
  { category: 'Entertainment', amount: 1000 },
  { category: 'Food', amount: 2500 },
  { category: 'Gym', amount: 500 },
  { category: 'Transportation', amount: 1000 },
];

const expenseDataOverTime = [
  { month: 'Mar 2023', amount: 3000 },
  { month: 'Apr 2023', amount: 2500 },
  { month: 'May 2023', amount: 3000 },
  { month: 'Jun 2023', amount: 0 },
  { month: 'Jul 2023', amount: 24000 },
];

export default function ExpenseDashboard() {
  return (
    <div className="dashboard-container">
      <h2>Expense by Category</h2>
      <BarChart width={600} height={300} data={expenseDataByCategory}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#82ca9d" name="Total Amount" />
      </BarChart>

      <h2>Expense Over Time</h2>
      <LineChart width={600} height={300} data={expenseDataOverTime}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#00bcd4" name="Total Amount" />
      </LineChart>
    </div>
  );
}