import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map(({ title, amount, date }, index) => (
        <ExpenseItem key={index} title={title} amount={amount} date={date}></ExpenseItem>
      ))}
    </div>
  );
};

export default Expenses;
