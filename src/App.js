import './App.css';
import LinePlot from "./LinePlot";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Data Visualization: <em>Earnings & Productivity Link</em></h1>
        <h2><em>Have worker earnings increased with the rising labor productivity in the U.S.?</em></h2>
      </header>

      <div className='App-paragraph'>
        <p> 
          In society, productivity has continuously increased. Productivity is essentially a measure of efficiency calculated by the <b>goods outputed over 'x' time</b>. It has increased for various reasons, such as workers working harder or due to technological improvements and automation of certain tasks. In an ideal world, it's hoped that with rising productivity, which in turn leads to increased profits, would result in increase in the overall earnings of employees. 
          
          To analyze if this is actually true let's analyze median salary/wages over the years and the productivity. 
        </p>
      </div>

      <LinePlot filePath={`${process.env.PUBLIC_URL}/data/ProductivityVsEarnings.csv`} title="Labor Productivity vs. Real Weekly Earnings" dependent="earnings" dateFormat="%m/%d/%Y" />


      <div className='App-paragraph'>
        <p>
          The chart above shows the real meadian weekly earnings of workers compared to the productivity in relation to the years. Similar charts are all over the internet showing the how productivity has been increasing, but the earnings (composing of salaries and wages) have been stagnant. When analyzing the numbers this is even more clear. The increase in productivity from 1980 to 2024 has been <b>+131.40%</b> while for the earnings it only has been <b>+11.94%</b>.
          <br /> <br />
          At first, you might be enraged hearing this. However, this chart doesn't give the full picture. The data of real weekly earnings isn’t inclusive of everyone especially those who are self employed which make up a large chunk of employment and more importantly have a role in the productivity data.
          <br /> <br />
          Additionally, it's important to remeber how earnings don't reflect everything. There are other benifits that employees earn termed as the total compensation.
          <br /> <br />
          Composition of Compensation:
          Potential Chart HERE?
          <br /> <br />
          To see a more accurate picture below is the chart of real hourly comparision earned vs the labor productivity over years.
        </p>
      </div>

      <LinePlot filePath={`${process.env.PUBLIC_URL}/data/ProductivityVsCompensation.csv`} title="Labor Productivity vs. Real Hourly Compensation" dependent="compensation" dateFormat="%Y-%m-%d" />

      <div className='App-paragraph'>
        <p>
          This chart seems more reasonable. The compensation increased around <b>+52.52%</b>. Which is much better than the 11.94%, but still not great as the productivity has increased almost <b>2.5x</b> more than the compensation in the same amount of time. So where are the rest of the profits going?
          <br/> 
        </p>

        Data on where the money goes?
        - Visualization Data potential: 
          - Increasing profits kept by the owners? -- barchart?
          - Money used to improve work? better tech machines etc, capital? -- piechart?
          - only the top % of people getting major increases while the lower % (majority) aren't 
      </div>

      <div className='App-paragraph'>
        <h2>Calculations:</h2>
        <hr />
          <b>% Increase</b> = ((Final - Initial)/Initial) x 100
          <br />
          <b>% Increase Productivity</b> = ((231.40249 - 100)/100) x 100
          <br />
          <b>% Increase Real Earnings (Salary/Wages)</b> = ((111.9403 - 100)100) x 100
          <br />
          <b>% Increase Compensation</b> = ((152.51548 - 100)100) x 100
          <br />
        <h2>Data Sources:</h2>
        <hr />
          <ul>
            <li><b>Productivity: </b><a href='https://fred.stlouisfed.org/series/OPHNFB'>U.S. Bureau of Labor Statistics via FRED (OPHNFB)</a></li>
            <li><b>Weekly Real Earnings: </b><a href='https://fred.stlouisfed.org/series/LES1252881600Q'>U.S. Bureau of Labor Statistics via FRED (LES1252881600Q)</a></li>
            <li><b>Real Hourly Compensation: </b><a href='https://fred.stlouisfed.org/series/COMPRNFB'>U.S. Bureau of Labor Statistics via FRED (COMPRNFB)</a></li>
          </ul>
      </div>

        
    </div>
  );
}




export default App;
