import { useState } from "react";
import Card from "../UI/Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

export default function Expenses(props: any) {
  const [filterYear, setFilterYear] = useState("2022");

  const expenses = props.expenses;

  const filterYearHandler = (year: string) => {
    setFilterYear(year);
  };

  const filteredExpenses = expenses.filter(
    (i: any) => i.date.getFullYear() == filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSelectYear={filterYearHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
        <ExpensesList
          expenseData={filteredExpenses}
          filterYear={filterYear}
        ></ExpensesList>
      </Card>
    </div>
  );
}
