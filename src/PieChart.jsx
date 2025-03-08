//https://d3-graph-gallery.com/graph/pie_annotation.html

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const PieChart = ({ filePath, title, values}) => {

  const svgRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    //loading csv data, removing empty slots 
    d3.csv(filePath, (d) => {
      if (!d.label || d.label === "" || d[values] === "" || isNaN(+d[values])) {
        return null;
      }

      return {
        label: d.label,
        [values]: +d[values]
      };
    })
      .then((loadedData) => setData(loadedData.filter(d => d !== null)));
  }, [filePath, values]);

  useEffect(() => {
    //if its data is empty.. just return
    console.log(data);
    if (data.length === 0) return;


    //size of chart
    const margin = { top: 50, right: 50, bottom: 50, left: 50 },
      width = 460,
      height = 400;
      
    const radius = Math.min(width, height) / 2 - margin.top;

    //clearing it
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    //faint rectangle color background
    svg.append("rect")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("fill", "whitesmoke");

    const g = svg
    .attr("width", width)
    .attr("height", height+margin.bottom)
    .append("g")
    .attr("transform", `translate(${width/2},${height/2})`);
    
    //pie chart logic
    const color = d3.scaleOrdinal(d3.schemeSet3);
    const pie = d3.pie().value((d) => d[values]);
    const data_ready = pie(data);

    const arcGenerator  = d3.arc().innerRadius(0).outerRadius(radius)

    g.append("g")
      .selectAll("mySlices")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => color(d.data.label))
      .attr("stroke", "black")
      .style("stroke-width", ".25em")
      .style("opacity", 0.7);

    //percent label
    const total = d3.sum(data, (d) => d[values]);
    g.append("g")
      .selectAll("mySlices")
      .data(data_ready)
      .enter()
      .append("text")
      .text((d) => `${((d.data[values] / total) * 100)}%`) //percent
      .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
      .style("text-anchor", "middle")
      .style("font-size", 15)

    //legned
    const legend = svg.append("g").attr("transform", `translate(${margin.left}, ${height-margin.bottom/2})`);

    const labelHeight = 12;

    legend
    .selectAll("legendBox")
    .data(data_ready)
    .enter()
    .append("rect")
    .attr("y", (d, i) => labelHeight * i * 1.8)
    .attr("width", labelHeight)
    .attr("height", labelHeight)
    .attr("fill", (d) => color(d.data.label))
    .attr("stroke", "black")
    .style("stroke-width", "1");

  legend
    .selectAll("legendLabel")
    .data(data_ready)
    .enter()
    .append("text")
    .text((d) => d.data.label)
    .attr("x", labelHeight * 1.5)
    .attr("y", (d, i) => labelHeight * i * 1.8 + labelHeight - 2)
    .style("font-size", `${labelHeight}`);


    //text labels: title
    svg.append("text")
      .attr("class", "TitleLabel")
      .attr("x", margin.left/2-8)
      .attr("y", margin.top/2)
      .attr("text-anchor", "start")
      .text(title)
      .attr("font-weight", "bold");


    }, [data, title, values]);

    return <div style={{margin: "auto", maxWidth: "50vw", overflowX: "auto"}}>
    <svg ref={svgRef} width={460} height={400}></svg>
    </div>;
};
  
export default PieChart;