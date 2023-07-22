import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesChart from "./components/Expenses/ExpensesChart/ExpensesChart";

const DUMMY_EXPENSE_DATA = [
  { title: "Car Insurance", amount: 50.5, date: new Date(2022, 6, 20) },
  { title: "Movies", amount: 50.2, date: new Date(2021, 6, 23) },
  { title: "Lunch", amount: 20.5, date: new Date(2022, 5, 30) },
  { title: "Book", amount: 34.5, date: new Date(2022, 3, 30) },
  { title: "Movies", amount: 19.5, date: new Date(2022, 2, 30) },
  { title: "Massage", amount: 67.5, date: new Date(2022, 7, 30) },
  { title: "Lunch", amount: 5.9, date: new Date(2020, 6, 29) },
  { title: "Book", amount: 45.7, date: new Date(2020, 6, 28) },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE_DATA);


  const addExpenseHandler = (e: any) => {

    setExpenses((prevExpenses: any) => {
      return [...prevExpenses, e];
    });
  };

  return (
    <div>
      <h2 className="App-header">Lets get started</h2>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses expenses = {expenses}></Expenses>

    </div>
  );
}

export default App;
