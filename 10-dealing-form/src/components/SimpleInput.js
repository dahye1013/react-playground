import React from 'react';

import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBluerHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const formIsValid = nameIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    /**
     *  prevent http request (form event default behavior)
     *  http request lead to the page being reloaded
     *  -> not have server in this case, prevent request
     *  => use static server that serves JS and html
     *
     * {@link https://ko.javascript.info/forms-submit}
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event}
     */
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${nameInputHasError && 'invalid'} `}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={`form-control ${emailInputHasError && 'invalid'}`}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBluerHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email must includes '@'</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
