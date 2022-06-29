import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

// [StateLess Component] - not have any internal state
const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">{expense.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
