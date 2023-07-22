import React from "react";
import './NewExpense.css';
import ExpenseForm from "../ExpenseForm/ExpenseForm";

export default function NewExpense(props: any) {

    const saveExpenseDataHandler = (enteredExpenseData: any) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // Calling the function we recieve through props and passing the data
        // into the function, into the parent component
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            {/* to pass values from child to parent, 
            create a prop to call the function
            and call the function at expenseform */}
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}