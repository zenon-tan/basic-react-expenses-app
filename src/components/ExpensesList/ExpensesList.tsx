import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props: any) {

  let expensesContent = <p>No expenses found</p>;


  if (props.expenseData.length > 0) {
    expensesContent = props.expenseData.map((i: any) => (
      <ExpenseItem expense={i}></ExpenseItem>
    ));
  }

  return (
    <div className="expenses-list">
        {expensesContent}
    </div>
  )
}
