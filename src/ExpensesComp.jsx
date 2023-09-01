
import './ExpensesComp.css'
import BarsComp from "./BarsComp";
import data from "./data.json";

function ExpensesComp() {
  return (
    <>
      <section className="chartBody">
        <h1>Spending - Last 7 days</h1>
        <BarsComp items={data} />
      </section>
    </>
  );
}

export default ExpensesComp;
