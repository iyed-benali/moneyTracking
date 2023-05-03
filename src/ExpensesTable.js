import React from 'react';

function ExpensesTable(props) {
  const { expensesList, onDeleteExpense } = props;

  const filteredExpenses = expensesList.filter(
    expense => expense.date && expense.amount && expense.description
  );

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '20px' }}>
      <thead style={{ borderBottom: '2px solid #ccc' }}>
        <tr>
          <th style={{ padding: '10px 0', textAlign: 'left' }}>Description</th>
          <th style={{ padding: '10px 0', textAlign: 'left' }}>Date</th>
          <th style={{ padding: '10px 0', textAlign: 'left' }}>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filteredExpenses.map((expense) => (
          <tr key={expense.id} style={{ borderBottom: '1px solid #ccc' }}>
            <td style={{ padding: '10px 0' }}>{expense.description}</td>
            <td style={{ padding: '10px 0' }}>{expense.date}</td>
            <td style={{ padding: '10px 0' }}>{expense.amount}</td>
            <td style={{ padding: '10px 0' }}>
              <button
                style={{
                  backgroundColor: 'red',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                }}
                onClick={() => onDeleteExpense(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpensesTable;
