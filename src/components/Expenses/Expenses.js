import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    // const expenses = props.expenses;

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === +filteredYear);
    

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {/* <ExpenseItem title={expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date} />
            <ExpenseItem title={expenses[3].title} amount = {expenses[3].amount} date = {expenses[3].date} /> */}
            {filteredExpenses.length > 0 && <ExpensesChart expenses={filteredExpenses}/>}
            <ExpensesList items = {filteredExpenses} />
        </Card>
    )
}

export default Expenses;