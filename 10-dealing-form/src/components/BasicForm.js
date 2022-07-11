import React from 'react';

import useInput from '../hooks/useInput';

const validateEmpty = (value) => value.trim() !== '';
const validateEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameInputReset,
  } = useInput(validateEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameInputReset,
  } = useInput(validateEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: EmailInputReset,
  } = useInput(validateEmail);

  const submitHandler = (event) => {
    event.preventDefault();
    firstNameInputReset();
    lastNameInputReset();
    EmailInputReset();
  };

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameHasError && 'invalid'}`}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please fill in the first name.</p>}
        </div>
        <div className={`form-control ${lastNameHasError}`}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Please fill in the last name</p>}
        </div>
      </div>
      <div className={`form-control ${emailHasError && 'invalid'}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Email must includes '@'.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
