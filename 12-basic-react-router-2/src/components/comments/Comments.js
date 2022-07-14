import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import LoadingSpinner from '../UI/LoadingSpinner';

import useHttp from '../../hooks/useHttp';
import { getAllComments } from '../../lib/api';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments, true);

  const { quoteId } = params;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  console.log(loadedComments, 'loadedComments');
  let commentsContent;

  if (status === 'pending') {
    commentsContent = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    commentsContent = <CommentsList comments={loadedComments} />;
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    commentsContent = <p className="centered">No comments were added! add first comment! </p>;
  }

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {commentsContent}
    </section>
  );
};

export default Comments;
