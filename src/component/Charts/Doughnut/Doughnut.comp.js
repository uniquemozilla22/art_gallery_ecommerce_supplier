import React from "react";
import { Doughnut } from "react-chartjs-2";
import generateRandomColor from "./../Services/RandomColorGenerator";
import styled from "@emotion/styled";

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

export const DoughnutContainer = (props) => {
  return (
    <ChartContainer>
      <div>
        <h3>{props.name}</h3>
      </div>
      <DoughnutChart {...props} />
    </ChartContainer>
  );
};

const ChartContainer = styled.div({
  background: "#E8EBFE",
  padding: "2rem",
  borderRadius: "20px",
  flex: " 1 1",
});

export default DoughnutChart;
