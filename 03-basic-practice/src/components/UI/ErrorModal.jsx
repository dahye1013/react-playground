import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../UI/Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

/**
 * new component 
- add in this same file because in this app
- use this Backdrop component in conjunction with modal
 */
const BackDrop = ({ onConfirm }) => {
  return <div className={classes.backdrop} onClick={onConfirm} />;
};

const ModalOverLay = ({ title, message, onConfirm }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverLay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root'),
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
