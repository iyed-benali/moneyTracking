import React, { useState, useMemo } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import FilterSortBar from './FilterSortBar';

function Expenses() {
  const [expensesList, setExpensesList] = useState([]);
  const [filterOption, setFilterOption] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [budget, setBudget] = useState('');

  function handleExpenseSubmit(expense) {
    setExpensesList(prevExpensesList => [...prevExpensesList, expense]);
  }

  function handleFilterChange(event) {
    const filterValue = event.target.value.toLowerCase();
    setFilterOption(filterValue);
  }
  
  function handleSortChange(event) {
    setSortOption(event.target.value);
  }

  const filteredAndSortedExpenses = useMemo(() => {
    let filteredExpenses = expensesList;
  
    if (filterOption) {
      filteredExpenses = filteredExpenses.filter(
        expense => expense.description.toLowerCase().includes(filterOption)
      );
    }
      
    if (sortOption === 'amount') {
      filteredExpenses.sort((a, b) => a.amount - b.amount);
    } else if (sortOption === 'date') {
      filteredExpenses.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  
    return filteredExpenses;
  }, [expensesList, filterOption, sortOption]);

  const totalExpenses = filteredAndSortedExpenses.reduce((total, expense) => {
    return total + Number(expense.amount);
  }, 0);

  const remainingBudget = budget - totalExpenses;

  return (
    <div className="expenses-container">
      <h2>Expenses Tracker App</h2>
      <ExpenseForm onExpenseSubmit={handleExpenseSubmit} budget={budget} onBudgetSet={setBudget} />
      <div className="budget-details">
        <p>Total Amount : {Math.abs(remainingBudget)}</p>
      </div>
      <FilterSortBar
        filterOption={filterOption}
        sortOption={sortOption}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <ExpensesTable
        expensesList={filteredAndSortedExpenses}
        onDeleteExpense={id => setExpensesList(prevExpensesList => prevExpensesList.filter(expense => expense.id !== id))}
      />
    </div>
  );
}

export default Expenses;
