import './App.css';
import LinePlot from "./LinePlot";
import BarChart from "./BarChart";
import PieChart from "./PieChart";


function App() {

  return (
    <div className="App">
      <header>
        <h1>Data Visualization: <em>Earnings & Productivity Link</em></h1>
      </header>

      <h2><em>Have worker earnings increased with the rising labor productivity in the U.S.?</em></h2>

      <div className='App-paragraph'>
        <p> 
          In society, productivity has continuously increased. Productivity is essentially a measure of efficiency calculated by the <b>goods produced over 'x' time</b>. It has increased for various reasons, such as workers working harder or due to technological improvements and automation of certain tasks. In an ideal world, it's hoped that with rising productivity, which in turn leads to increased profits, would result in increase in the overall earnings of employees. 
          
          To analyze if this is actually true let's analyze median salary/wages over the years and the productivity. 
        </p>
      </div>

      <LinePlot filePath={`${process.env.PUBLIC_URL}/data/ProductivityVsEarnings.csv`} title="Labor Productivity vs. Real Weekly Earnings" dependent="earnings" dateFormat="%m/%d/%Y" />


      <div className='App-paragraph'>
        <p>
          The chart above shows the real median weekly earnings of workers compared to the productivity in relation to the years. By 'real' all that is meant is that it accounts for inflation by using the <b>Consumer Price Index (CPI)</b> that tracks changing prices in what consumers purchases. Thus, it is more reflective of the actual or real value of the money. Similar charts are all over the internet showing the how productivity has been increasing, showing the earnings (composing of salaries and wages) have been stagnant. When analyzing the numbers this is even more clear. From 1980 to 2024 <b>productivity has increased 131.40%</b> while the <b>earnings only have increased by 11.94%</b>.
          <br /> <br />
          At first, you might be shocked hearing this. However, this chart doesn't give the full picture. The data of real weekly earnings isn’t inclusive of everyone especially those who are self employed which make up a large chunk of employment and more importantly these individuals are included in the productivity data.
          <br /> <br />
          Additionally, it's important to remember how weekly earnings don't reflect everything. There are other benefits that employees earn termed as the total compensation. The compensation is composed up many things. To get a better understanding of what's included, below is a small list of what makes up the compensation:
          <ul>
            <li>Actual wages/salaries</li>
            <li>Bonus, awards, or other rewards</li>
            <li>Paid time off from vacations to sick days</li>
            <li>Insurance (medial/dental/vision)</li>
            <li>Retirement plans</li>
          </ul>
          To see a more accurate picture below is the chart of real hourly comparision earned vs the labor productivity over years.
        </p>
      </div>

      <LinePlot filePath={`${process.env.PUBLIC_URL}/data/ProductivityVsCompensation.csv`} title="Labor Productivity vs. Real Hourly Compensation" dependent="compensation" dateFormat="%Y-%m-%d" />

      <div className='App-paragraph'>
        <p>
          This chart gives a more reasonable picture. It shows how compensation is actually growing, but just not as fast as the productivity growth. The <b>compensation increased around 52.52%</b>, which is much better than the 11.94% seen in real weekly wages/salaries, but still falls behind the productivity growth, which has grown almost <b>2.5 times the compensation</b> over the same amount of time. So where are the rest of the profits going? One explanation can be seen in the rising corporate profits. 
        </p>
      </div>

      <BarChart filePath={`${process.env.PUBLIC_URL}/data/CorporateProfits.csv`} title="Corporate Profits Over Time (IVA & CCAd included)" dependent="Corporate_Profits_Indexed_1979" dateFormat="%m/%d/%Y" />

    <div className='App-paragraph'>
      <p>This chart shows corporate profits after taxes, including <b>Inventory Valuation Adjustment (IVA)</b> and <b>Capital Consumption Adjustment (CCAdj)</b>, which account for inflation impacts on inventory and the changing costs of fixed assets. 
      </p>
      <p>
        As seen in the chart, there is an increasing trend, over the years corporations/businesses have continuously gained more and more profit. To be exact there was an increase of <b>1,634% in corporate profits</b> from 1979 to 2023. However, getting a clear picture is more complex. While rising corporate profits can be a potential reason of why workers earnings isn't keeping up with the productivity growth, corporate profit doesn't necessarily mean all the money is directly going to the executives. It can be going towards investing back into the company to get better technology and infrastructure.
      </p>
      <p>
        To see if this is actually true, let's analyze the factors that have caused labor productivity growth. Below is a chart containing the three major sectors that contribute to the labor productivity growth. <b>Capital intensity</b> contribution is how much of the productivity growth is due to capital that being used to get more or better equipment and technology. <b>Labor contribution</b> is how much the workers skills or education or other related factor is impacting the growth of productivity. Lastly, the <b>total factor productivity (TFP)</b> shows how much growth is due to efficiency from things like better management practices. 
      </p>

    </div>
    <PieChart filePath={`${process.env.PUBLIC_URL}/data/ProductivityContribution.csv`} title="Contributions to Labor Productivity Growth (1987-2022)" values="values"/>
    <div className='App-paragraph'>
      <p>
        Overall this chart shows how capital intensity have had the largest impact on the growing productivity accounting for 45%, followed by TFP which is 40%. However, it's interesting to see how labor only has a 15% increase. Basically, the investments in technology, automation, and improved management practices have had a larger impact on productivity than the increasing worker skills/education.
        <br/><br/>
        This indicates how just because the productivity is growing doesn't mean the wages will follow the same trend at the same rate. Many times the profit from the increasing productivity goes to the companies/corporations or is reinvested via capital improvements as seen by the chart. This is one of the reasons by the wages and compensation lags behind the increasing trend of productivity.
        <br/><br/>
        Additionally, with the recent advancements in Artificial Intelligence (AI), the gap is likely to just further increase. Many companies have been investing heavily in AI it to automate jobs, increase efficiency, and therefor increase their output. This will result in the productivity to grow even more which likely won't be reflected in the earnings of employees. 
      </p>

      <p>
        All in all, yes the trend is clear productivity in the U.S. is increasing heavily every year and the earnings of employees isn't keeping pace. While it may seem that the earnings are stagnant when looking at just the real wages, this isn't the full earnings of employees. Many earn bonuses and other forms of compensations which has been increasing slowly over the years, however is still isn't growing at the same speed as the productivity. This is essentially explained by the corporate profits which are increasing at a drastic rate from which a portion is reinvested back into the company. This is important to note as there's usually a large portion of profits going towards increasing the technology and machinery used in the companies. Which in turn also leads to a growth in the overall productivity, but at the cost of employees who aren't aren't earning at the same rate as the productivity increase.
        <br/><br/>
        This also brings light to the other problems like the income inequality/disparity. Many times the productivity just benefits the corporations or the top executives. The benefits of productivity don't always end up going to the workers/employees. To make sure this changes, there must be some form of policies to regulate the system. For example, policies to maintain a balance between the earnings of employees with the spendings on capital in comparisons to the productivity.
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
            <li><b>Contributions to Productivity Growth</b> <a href='https://www.bls.gov/news.release/prod3.tb.htm' target="_blank" rel="noreferrer noopener">U.S. Bureau of Labor Statistics</a></li>
            <li><b>Productivity: </b><a href='https://fred.stlouisfed.org/series/OPHNFB' target="_blank" rel="noreferrer noopener">FRED - U.S. Bureau of Labor Statistics (OPHNFB)</a></li>
            <li><b>Weekly Real Earnings: </b><a href='https://fred.stlouisfed.org/series/LES1252881600Q' target="_blank" rel="noreferrer noopener">FRED - U.S. Bureau of Labor Statistics (LES1252881600Q)</a></li>
            <li><b>Real Hourly Compensation: </b><a href='https://fred.stlouisfed.org/series/COMPRNFB' target="_blank" rel="noreferrer noopener">FRED - U.S. Bureau of Labor Statistics (COMPRNFB)</a></li>
            <li><b>Corporate Profits: </b> <a href='https://fred.stlouisfed.org/series/CPATAX' target="_blank" rel="noreferrer noopener">FRED - U.S. Bureau of Labor Statistics via (CPATAX)</a></li>
          </ul>
      </div>

        
    </div>
  );
}




export default App;
