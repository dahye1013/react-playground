import React, { useState, useMemo } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
  const [enteredUserInfo, setEnteredUserInfo] = useState({ username: '', age: '' });
  const isValidUserInfo = useMemo(() => {
    return (
      enteredUserInfo.username.trim().length !== 0 &&
      enteredUserInfo.age.trim().length !== 0 &&
      +enteredUserInfo.age.trim() > 1
    );
  }, [enteredUserInfo]);
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (!isValidUserInfo) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age(non-empty values)',
      });
      return;
    }

    onAddUser(enteredUserInfo);
    setEnteredUserInfo({ username: '', age: '' });
  };

  const userNameChangeHandler = (event) => {
    const { id, value } = event.target;
    setEnteredUserInfo((prevUserInfo) => {
      return { ...prevUserInfo, [id]: value };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  /**
  custom components only work with props
  default html like labe, input, button are pre-configured by react 
  -> work with class names prop, apply a fitting css class
 */
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* htmlFor - prop name for assigning that for attribute to a label, which label belong  */}
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            value={enteredUserInfo.username}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserInfo.age}
            onChange={userNameChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
