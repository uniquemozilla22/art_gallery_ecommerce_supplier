import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import generateRandomColor from "./../Services/RandomColorGenerator";

const DoughnutChart = ({ data, name, labels }) => {
  const colors = labels.map(() => generateRandomColor());
  const colors20 = colors.map((color) => color + "20");
  const datasetCreator = () => {
    return data.map((item, index) => {
      const dataSet = {
        label: item.label,
        data: item.data,
        borderColor: colors,
        backgroundColor: colors20,
        borderWidth: 1,
      };

      return dataSet;
    });
  };
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
    datasets: [...datasetCreator()],
  };

  return <Doughnut options={options} data={chartData} />;
};

export default DoughnutChart;
