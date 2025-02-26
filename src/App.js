import './App.css';
import LinePlot from "./LinePlot";
import BarChart from "./BarChart";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Data Visualization: <em>Earnings & Productivity Link</em></h1>
        <h2><em>Have worker earnings increased with the rising labor productivity in the U.S.?</em></h2>
      </header>

      <div className='App-paragraph'>
        <p> 
          In society, productivity has continuously increased. Productivity is essentially a measure of efficiency calculated by the <b>goods produced over 'x' time</b>. It has increased for various reasons, such as workers working harder or due to technological improvements and automation of certain tasks. In an ideal world, it's hoped that with rising productivity, which in turn leads to increased profits, would result in increase in the overall earnings of employees. 
          
          To analyze if this is actually true let's analyze median salary/wages over the years and the productivity. 
        </p>
      </div>

      <LinePlot filePath={`${process.env.PUBLIC_URL}/data/ProductivityVsEarnings.csv`} title="Labor Productivity vs. Real Weekly Earnings" dependent="earnings" dateFormat="%m/%d/%Y" />


      <div className='App-paragraph'>
        <p>
          The chart above shows the real median weekly earnings of workers compared to the productivity in relation to the years. By 'real' all that is meant is that it accounts for inflation by using the <b>Consumer Price Index (CPI)</b> that tracks changing prices in what consumers purchases. Thus, it is more reflective of the actual or real value of the money. Similar charts are all over the internet showing the how productivity has been increasing, showing the earnings (composing of salaries and wages) have been stagnant. When analyzing the numbers this is even more clear. From 1980 to 2024 productivity has increased <b>+131.40%</b> while the earnings only have increased by <b>+11.94%</b>.
          <br /> <br />
          At first, you might be enraged hearing this. However, this chart doesn't give the full picture. The data of real weekly earnings isn’t inclusive of everyone especially those who are self employed which make up a large chunk of employment and more importantly these individuals are included in the productivity data.
          <br /> <br />
          Additionally, it's important to remember how weekly earnings don't reflect everything. There are other benefits that employees earn termed as the total compensation.
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
          This chart gives a more reasonable picture. The compensation increased around <b>+52.52%</b>, which is much better than the 11.94%, but still is not great as the productivity has increased almost <b>2.5x</b> more than the compensation in the same amount of time. So where are the rest of the profits going? One explanation can be seen in the rising corporate profits. 
        </p>
      </div>

      <BarChart filePath={`${process.env.PUBLIC_URL}/data/CorporateProfits.csv`} title="Corporate Profits Over Time (IVA & CCAd included)" dependent="Corporate_Profits_Indexed_1979" dateFormat="%m/%d/%Y" />

    <div className='App-paragraph'>
      <p>This chart shows corporate profits after taxes, including <b>Inventory Valuation Adjustment (IVA)</b> and <b>Capital Consumption Adjustment (CCAdj)</b>, which account for inflation impacts on inventory and the changing costs of fixed assets. 
      </p>
      <p>
        As seen in the chart, there is an increasing trend, over the years corporations/businesses have continuously gained more and more profit. To be exact there was an increase of <b>+1,634%</b> from 1979 to 2023. However, getting a clear picture is more complex. While rising corporate profits can be a potential reason of why workers earnings isn't keeping up with the productivity growth, corporate profit doesn't necessarily mean all the money is directly going to the executives. It can be going towards investing back into the company to get better technology and infrastructure.
      </p>
      <p>
        Now talk about investment in technology? relate it back to one of the causes of rise in productivity too.
      </p>

    </div>

      <div className='App-paragraph'>
        <h2>Calculations:</h2>
        <hr />
          <b>% Increase</b> = ((Final - Initial)/Initial) x 100
          <br />
          <b>% Increase Productivity</b> = ((231.40249 - 100)/100) x 100
          <br />
          <b>% Increase Real Earnings (Salary/Wages)</b> = ((111.9403 - 100)/100) x 100
          <br />
          <b>% Increase Compensation</b> = ((152.51548 - 100)/100) x 100
          <br />
          <b>% Increase Corporate Profits</b> = ((1734.228598 - 100)/100) x 100
        <h2>Data Sources:</h2>
        <hr />
          <ul>
            <li><b>Productivity: </b><a href='https://fred.stlouisfed.org/series/OPHNFB'>U.S. Bureau of Labor Statistics via FRED (OPHNFB)</a></li>
            <li><b>Weekly Real Earnings: </b><a href='https://fred.stlouisfed.org/series/LES1252881600Q'>U.S. Bureau of Labor Statistics via FRED (LES1252881600Q)</a></li>
            <li><b>Real Hourly Compensation: </b><a href='https://fred.stlouisfed.org/series/COMPRNFB'>U.S. Bureau of Labor Statistics via FRED (COMPRNFB)</a></li>
            <li><b>Corporate Profits: </b> <a href='https://fred.stlouisfed.org/series/CPATAX'>U.S. Bureau of Labor Statistics via FRED (CPATAX)</a></li>
          </ul>
      </div>

        
    </div>
  );
}




export default App;
