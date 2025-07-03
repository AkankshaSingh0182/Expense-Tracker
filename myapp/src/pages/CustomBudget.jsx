import React, { useState } from 'react';
import './CustomBudget.css';

const CreateBudgetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    income: 0,
    startDate: '',
    endDate: '',
    categories: {
      Food: 0,
      Transportation: 0,
      Shopping: 0,
      Bills: 0,
      Entertainment: 0,
      Education: 0,
      Other: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.categories) {
      setFormData((prev) => ({
        ...prev,
        categories: { ...prev.categories, [name]: parseFloat(value) },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can post this to a server
    alert("Budget Created Successfully!");
  };

  return (
    <form className="budget-form" onSubmit={handleSubmit}>
      <h2>Create Custom Budget</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="income"
        placeholder="Monthly Income"
        value={formData.income}
        onChange={handleChange}
      />

      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />

      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />

      <h3>Budget Categories</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Allocation Percentage</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(formData.categories).map((category) => (
            <tr key={category}>
              <td>{category}</td>
              <td>
                <input
                  type="number"
                  step="0.1"
                  name={category}
                  value={formData.categories[category]}
                  onChange={handleChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="submit">Create Budget</button>
    </form>
  );
};

export default CreateBudgetForm;