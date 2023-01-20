import React from "react";
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
  pieHole: 0.5,
  is3D: false,
};

export function ChartDonut() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      legendToggle={false}
      options={options}
    />
  );
}
