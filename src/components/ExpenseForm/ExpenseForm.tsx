import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props: any) {
  // A state for each form input
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Combined state
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [showForm, setShowForm] = useState(false);

  // Combined change handler
  const inputChangeHandler = (identifier: any, value: any) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const titleChangeHandler = (event: any) => {
    setUserInput(
      // Set the existing values back to the object using the spread
      // Whenever you update the state and you depend on the other state,
      // Pass in a function instead -> it'll automatically be executed
      // This will guarantee the latest state snapshots
      (prevState: any) => {
        return { ...prevState, enteredTitle: event.target.value };
      }
    );
  };

  const amountChangeHandler = (event: any) => {
    setUserInput((prevState: any) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event: any) => {
    // When updating the state based on the previous state,
    // use the functional form to set the new value
    setUserInput((prevState: any) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const showFormHandler = (show: boolean) => {
    setShowForm(show)
  };

  const submitHandler = (event: any) => {
    // Disable the default browser refresh behavior
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // pass data using props.onSaveExpenseData into the function
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setShowForm(false);
  };

  let formContent = <button onClick={() => {showFormHandler(true)}}>Add Expense</button>

  if(showForm === true) {
    formContent = (
        <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* Two way binding to reset the input */}
          <input
            type="text"
            onChange={(event: any) =>
              inputChangeHandler("title", event.target.value)
            }
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={(event: any) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2020-07-11"
            max="2023-12-31"
            onChange={(event: any) =>
              inputChangeHandler("date", event.target.value)
            }
          />
        </div>

        <div className="new-expense__actions">
          <button onClick={() => {showFormHandler(false)}}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
    )
  }

  return (
    <div>
        {formContent}
    </div>
  );
}
