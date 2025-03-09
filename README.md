# Data Visualization: Labor Productivity & Earnings

### Essential Question:
How does the increasing worker productivity correlate with their earnings? Are workers benefiting from increasing productivity?

### Data Sources:
* [U.S. Bureau of Labor Statistics via FRED (OPHNFB)](https://fred.stlouisfed.org/series/OPHNFB) - Labor productivity (output / hour) over the years from 1941 to 2024.
* [U.S. Bureau of Labor Statistics via FRED (LES1252881600Q)](https://fred.stlouisfed.org/series/LES1252881600Q) - Real earnings of workers from 1979 to 2024. The data takes inflation into account by using the Consumer Price Index.
* [U.S. Bureau of Labor Statistics via FRED (COMPRNFB)](https://fred.stlouisfed.org/series/COMPRNFB) - Real hourly compensation from 1947 to 2024. Since this included more than just wages/salaries, this real hourly compensation might give a more accurate picture.
* [U.S. Bureau of Labor Statistics via FRED (CPATAX)](https://fred.stlouisfed.org/series/CPATAX) - Shows the Corporate Profits After Tax with IVA & CCAdj
* [U.S. Bureau of Labor Statistics](https://www.bls.gov/news.release/prod3.tb.htm)Contributions of capital intensity, labor composition, and total factor productivity to nonfarm labor productivity growth.

### D3.js Visualizations:
* **Line Graph:** Earnings & productivity plotted together (y-axis, left and right) vs. year (x-axis) - Showing rate of change or how much each one is increasing for each year
    * Can also include the real compensation to see if a similar trend exists.
* **Bar Chart:** Showing the change in corporate profits.
* **Pie Chart:** Showing off the contributions to the nonfarm labor productivity growth.

### Running the Webpage:
* Clone this repo locally
* `npm install`
* `npm start`
* `http://localhost:3000/`