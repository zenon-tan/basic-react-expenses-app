import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props: any) {
  // React hook
  // Must only be called inside component functions
  // useState requires an initial value and a setter function you can use
  // to update the value
  // array destructuring, [0] is the value, [1] is the setter function
  // State is instance based -> each component being used has its own state
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    // React uses useState to update variable changes
    // useState will reflect changes on the page
    // setTitle will call the component again and update it
    setTitle("Updated!");
    console.info(title);
  };

  let expensesContent = "No expenses found"

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      {/* 
        clickHandler should just be the name to the function
        because we only want it to be called when the button is clicked
        if we add () to it, the function will be called 
        */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
