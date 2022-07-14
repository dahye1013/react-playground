import React, { useRef, useEffect } from 'react';

import useHttp from '../../hooks/useHttp';
import { addComment } from '../../lib/api';
import classes from './NewCommentForm.module.css';

const NewCommentForm = ({ onAddedComment, quoteId }) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;
    sendRequest({ quoteId, commentData: enteredText });
  };

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
