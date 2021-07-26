import './App.css';
import ExpenseItem from './files/Expense/ExpenseItem';

const ExpenseData = [
  { title: "Car Insurance", price: 240.05, date: new Date("2021-03-25") },
  { title: "Bike Insurance", price: 150.05, date: new Date("2021-06-10") },
  { title: "4 Wheeler Insurance", price: 560, date: new Date("2021-03-17") },
  { title: "10 Wheeler Insurance", price: 780.65, date: new Date("2021-07-22") }
]


const App = () => {
  return (
    <div className="container foncy">
      <ExpenseItem name={ExpenseData[0].title} price={ExpenseData[0].price} date={ExpenseData[0].date} />
      <ExpenseItem name={ExpenseData[1].title} price={ExpenseData[1].price} date={ExpenseData[1].date} />
      <ExpenseItem name={ExpenseData[2].title} price={ExpenseData[2].price} date={ExpenseData[2].date} />
      <ExpenseItem name={ExpenseData[3].title} price={ExpenseData[3].price} date={ExpenseData[3].date} />
    </div>
  );
}

export default App;
