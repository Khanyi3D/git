import React, { useState } from 'react';
import '../Styling/ExpenseForm.css';

function ExpenseForm({ addExpense }) { // used to add new expense data
  const [name, setName] = useState(''); //name variable, using the setName to update its state, initially empty variable
  const [amount, setAmount] = useState('');//amount variable, using the setAmount to update its state, initially empty variable

  const handleSubmitError = (e) => { // error handling function
    e.preventDefault();// prevents default submission behavior
    if (name && amount) { //input validation
      const newExpense = { name, amount: parseFloat(amount) };// new variable for new expense, string converted to float using parseFloat
      addExpense(newExpense); //addExpense function used to connect the parent component
      setName(''); //new input field
      setAmount(''); //new input field
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmitError}>
      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expense Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}
// form wraps input and submit button
//error handling code is linked to onsubmit event
//expnse name input, data type is text; placeholder (grayedout) is Expense name;value is linked to name variable
//onchange updates name state
//expnse amoount input, data type is number; placeholder (grayedout) is Expense amount;value is linked to amount variable
//submit specified function of buttom
export default ExpenseForm;