//import logo from './logo.svg';
import './App.css';
import LinePlot from "./LinePlot";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Data Visualization: <em>Earnings & Productivity</em></h1>
        <LinePlot filePath={`${process.env.PUBLIC_URL}/data/ProductivityVsEarnings.csv`} title="Labor Productivity vs. Real Weekly Earnings" dependent="earnings" dateFormat="%m/%d/%Y"/>

        <div>
          <p>The chart above shows the meadian weekly earnings of workers compared to the productivity in relation to the years. It's seen that the productivity has been increasing, but the earnings (composing of salaries and wages) has been stagnant.</p>
          <p>However, this isn’t the full picture. This data of real weekly earnings isn’t inclusive of everyone especially those who are self employed.</p>
          <p>Additionally, it’s missing all the other benefits tthat make up a employee's earning. This is termed as the total compensation.</p>

          Composition of Compensation:
          Potential Chart HERE?
          
          <p>
          The graph below shows this comparision between the productivity and real hourly compensation.
          </p>
        </div>

        <LinePlot filePath={`${process.env.PUBLIC_URL}/data/ProductivityVsCompensation.csv`} title="Labor Productivity vs. Real Hourly Compensation" dependent="compensation" dateFormat="%Y-%m-%d"/>

      </header>
    </div>
  );
}




export default App;
