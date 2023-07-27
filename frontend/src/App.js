import './App.css'
import AddExpense from './components/AddExpense';
import ExpenseDashboard from './components/ExpenseDashboard';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="container">
      <div className='data_container'>
        <ExpenseDashboard />
        <AddExpense />
      </div>
        <ExpenseList />
    </div>
  );
}

export default App;
