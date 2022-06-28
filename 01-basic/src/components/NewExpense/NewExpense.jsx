import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
