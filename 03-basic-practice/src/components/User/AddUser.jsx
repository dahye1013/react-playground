import React, { useState, useRef } from 'react';

import Wrapper from '../Helpers/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
  // relying on refs to read the values
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const isValidUserInfo = (enteredUserInfo) => {
    const { username, age } = enteredUserInfo;
    return username.trim().length !== 0 && age.trim().length !== 0 && +age.trim() > 1;
  };

  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUserInfo = {
      username: nameInputRef.current.value,
      age: ageInputRef.current.value,
    };

    if (!isValidUserInfo(enteredUserInfo)) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age(non-empty values)',
      });
      return;
    }

    onAddUser(enteredUserInfo);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* htmlFor - prop name for assigning that for attribute to a label, which label belong  */}
          <label htmlFor="username">username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
