import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear),
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterExpense={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
