import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpenses';
import TransectionList from './Components/TransectionList';
import AddTransaction from './Components/AddTransection';
import GlobalProvider from './Context/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
          <Balance/>
          <IncomeExpense />
          <TransectionList />
          <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
