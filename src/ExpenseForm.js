import React, { useState } from 'react';

function ExpenseForm({ onExpenseSubmit }) {
  const [budget, setBudget] = useState('');
  const [expense, setExpense] = useState({
    amount: '',
    date: '',
    description: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === 'budget') {
      console.log('Budget has been set to:', value);
      setBudget(value);
    } else {
      setExpense(prevExpense => ({
        ...prevExpense,
        [name]: value
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if (budget && parseInt(budget) < parseInt(expense.amount)) {
      alert('You have exceeded your budget!');
    } else {
      onExpenseSubmit(expense);
      setExpense({
        amount: '',
        date: '',
        description: ''
      });
    }
  }
  
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Budget:
        <input type="text" name="budget" value={budget} onChange={handleInputChange} />
        <button type="submit" onClick={() => console.log('Budget has been submitted:', budget)}>Set Budget</button>
      </label>
      {budget && <div>Current budget: {budget}</div>}
      <label>
        Amount:
        <input type="number" name="amount" value={expense.amount} onChange={handleInputChange} />
      </label>
      <br />
      <br />
      <label>
        Date:
        <input type="date" name="date" value={expense.date} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" name="description" value={expense.description} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
