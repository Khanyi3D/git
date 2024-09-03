//App.js is the main component has all defaults inherited by the child comonents
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './Component/ExpenseForm';// import the ExpenseForm function from the ExpenseForm file 
import ExpenseList from './Component/ExpenseList'; //import the ExpenseList function from the ExpenseList file 
function App() {
  const [expenses, setExpenses] = useState([]); // create a variable called expense and setExpense to update using 'useState', we start with an empty expense table

  const todayDate = new Date ();
  const formattedDate = todayDate.toDateString();// formats date

  const addExpense = (expense) => { //add new expenses to expense table
    setExpenses([ ...expenses, expense ]); //'...' = the spread operator, keep all expenses in the table
};


  return (// create new class = app, add heading, using Expense Form function input Expense, using Expense List function input Expense values
    <div className="App"> 
    <h1> Your Monthly Expense Tracker</h1> 
    <h2> {formattedDate}</h2>{/* Displays today's date*/}
      
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
