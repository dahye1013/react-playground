import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseDate }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const userInputChangeHandler = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    // [Keep in mind!]
    //- update state from prevState shot to new snapshot
    //- React schedules state updates
    //- it doesn't perform them instantly
    //- if schedule a lot of state updates at the same time, it could be depending on outdated or incorrect state snapshot
    //- this way guarantee that the state snapshot it give latest snapshot
    // not just merge state!
    setUserInput((prevState) => {
      return { ...prevState, [name]: newValue };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setUserInput({ enteredTitle: '', enteredAmount: '', enteredDate: '' });
    onSaveExpenseDate(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="enteredTitle" onChange={userInputChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="enteredAmount"
            min="0.01"
            step="0.01"
            onChange={userInputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="enteredDate"
            min="2022-01-01"
            max="2022-12-31"
            onChange={userInputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
