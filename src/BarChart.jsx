import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const BarChart = ({ filePath, title, dependent, dateFormat = "%m/%d/%Y" }) => {

  const svgRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    //loading csv data, removing empty slots 
    d3.csv(filePath, (d) => {
      const date = d3.timeParse(dateFormat)(d.observation_date);
      if (isNaN(+d[dependent]) || d[dependent] === "") {
        return null;
      }

      return {
        date,
        [dependent]: +d[dependent]
      };
    })
      .then((loadedData) => setData(loadedData.filter(d => d !== null)));
  }, [filePath, dependent, dateFormat]);

  useEffect(() => {
    //if its data is empty.. just return
    if (data.length === 0) return;

    //creating the size of chart
    const margin = { top: 25, right: 25, bottom: 50, left: 50 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    //clearing it
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    //faint rectangle color background
    svg.append("rect")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("fill", "whitesmoke");

    const g = svg
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

    // x axis
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d[dependent])])
      .range([height, 0]);

    g.append("g")
      .call(d3.axisLeft(y))
      .call((g) => g.select(".domain").remove());

    //bars
    g.append("g")
      .attr("fill", "steelblue")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", d => x(d.date))
      .attr("y", d => y(d[dependent]))
      .attr("height", d => height - y(d[dependent]))
      .attr("width", 10);

    //text labels: title, x-Axis, y-Axis
    g.append("text")
      .attr("class", "TitleLabel")
      .attr("x", -25)
      .attr("y", -7.5)
      .attr("text-anchor", "start")
      .text(title)
      .attr("font-weight", "bold");

    g.append("text")
      .attr("class", "XAxisLabel")
      .attr("x", width / 2 - 5)
      .attr("y", height + margin.bottom - 10)
      .attr("text-anchor", "middle")
      .text("Date (Year)")
      .attr("font-weight", "bold");


    g.append("text")
      .attr("class", "YAxisLabel")
      .attr("x", -height / 2)
      .attr("y", -margin.left + 15)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text("Index 1979=100")
      .attr("font-weight", "bold");

    }, [data, title, dependent]);

    return <div style={{margin: "auto", maxWidth: "50vw", overflowX: "auto"}}>
    <svg ref={svgRef} width={460} height={400}></svg>
    </div>;
};
  
export default BarChart;