import ExpenseItem from './ExpenseItem';
import './Expenses.css';


const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense}></ExpenseItem>
      ))}
    </div>
  );
};

export default Expenses;
