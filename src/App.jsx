import BalanceComp from "./BalanceComp";
import ExpensesComp from "./ExpensesComp";
import MonthlyComp from "./MonthlyComp";
import './App.css'

function App() {
  return (
    <>
      <BalanceComp />
      <section className="body">
        <ExpensesComp />
        <MonthlyComp />
      </section>
    </>
  );
}

export default App;
