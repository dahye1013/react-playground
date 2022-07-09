import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailIsTouched;

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

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
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  };

  const nameChangeHandler = (event) => {
    const newValue = event.target.value;
    setEnteredName(newValue);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    const newValue = event.target.value;
    setEnteredEmail(newValue);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${nameInputIsInvalid && 'invalid'} `}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      <div className={`form-control ${emailInputIsInValid && 'invalid'}`}>
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInValid && <p className="error-text">Email must includes '@'</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
