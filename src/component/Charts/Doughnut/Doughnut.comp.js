import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import generateRandomColor from "./../Services/RandomColorGenerator";

const DoughnutChart = ({ data, name, labels }) => {
  const colors = labels.map(() => generateRandomColor());
  const colors20 = colors.map((color) => color + "20");

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: true,
    },
    plugins: {
      title: {
        display: true,
        text: { name },
      },
    },
  };
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: name,
        data: data,
        backgroundColor: colors20,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut options={options} data={chartData} />;
};

export default DoughnutChart;
