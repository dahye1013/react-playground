import Expenses from './components/Expenses/Expenses';

//  App - Root component
const App = () => {
  const expenses = [
    { title: 'Car 1', amount: 294.33, date: new Date(2022, 6, 28) },
    { title: 'Car 2', amount: 290.33, date: new Date(2022, 4, 28) },
    { title: 'Car 3', amount: 442.33, date: new Date(2022, 2, 28) },
    { title: 'Car 4', amount: 111.33, date: new Date(2022, 5, 28) },
    { title: 'Car 5', amount: 333.33, date: new Date(2022, 1, 28) },
  ];

  return (
    <div>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
