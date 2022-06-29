import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const handleEditing = () => {
    setIsEditing((prevIsEditing) => {
      return !prevIsEditing;
    });
  };

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} onEditing={handleEditing} />
      )}
      {!isEditing && <button onClick={handleEditing}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
