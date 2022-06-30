// signal underlying compilation process to transform to code so that CSS modules work
import styles from './Button.module.css'


const Button = props => {
  return (
     <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
