import React from "react";
import { Line } from "react-chartjs-2";
import generateRandomColor from "./../Services/RandomColorGenerator";
import styled from "@emotion/styled";

const LineComponent = ({ name, labels, data }) => {
  const datasetCreator = () => {
    return data.map((item, index) => {
      const colorpicker = generateRandomColor();
      const dataSet = {
        label: item.label,
        data: item.data,
        borderColor: colorpicker,
        backgroundColor: `${colorpicker}20`,
        yAxisID: "y" + index,
      };

      return dataSet;
    });
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: { name },
      },
    },
  };

  const chartData = {
    labels,
    datasets: [...datasetCreator()],
  };

  return <Line options={options} data={chartData} />;
};

export const LineContainer = (props) => {
  return (
    <ChartContainer>
      <div>
        <h3>{props.name}</h3>
      </div>
      <LineComponent {...props} />
    </ChartContainer>
  );
};

const ChartContainer = styled.div({
  background: "#E8EBFE",
  padding: "2rem",
  borderRadius: "20px",
  flex: " 1 1",
});

export default LineComponent;
