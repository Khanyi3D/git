import React from 'react';
import '../Styling/ExpenseList.css';

function ExpenseList({ expenses }) {
  const totalValue = expenses.reduce((total, expense) => total + expense.amount, 0);// calculate the total value, initial value is 0
//reduce = adds up amount of all expenses; expense passed down from the App.js component
  return (
    <div className="expense-name">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.name}</span>
            <span>R{expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h3>Total: R{totalValue.toFixed(2)}</h3>
    </div>
  );
}
// return - create an expense name class ( for styling)
//expense list -maps out the expense array as a list , key used to update the list
//each list element has 2 sections, 1 for displaying the expense name and the other for the amount fixed to 2 decimal places
// displaying the total amount to 2 decimal places
export default ExpenseList;