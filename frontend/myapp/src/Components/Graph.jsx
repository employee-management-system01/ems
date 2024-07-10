import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

export const data2 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options2 = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

const Graph = () => {
  return (
    <div style={{display:'flex',marginTop:'30px', flexWrap: 'wrap', }}>
      
       <div style={{border:'0.5px solid fff ',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding:'4px'}}>
         <Chart
      chartType="Bar"
      width="600px"
      height="300px"
      data={data2}
      options={options2}
    />
       </div>
       <div style={{border:'0.5px solid fff ',marginLeft:'auto',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
      <Chart
      chartType="PieChart"
      width="400px"
      height="300px"
      data={data}
      // options={options}
    />
      </div>
    </div>
  )
}

export default Graph;