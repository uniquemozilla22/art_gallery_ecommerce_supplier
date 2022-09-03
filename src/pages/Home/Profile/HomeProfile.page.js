import styled from "@emotion/styled";
import React, { useState } from "react";
import { LineContainer } from "../../../component/Charts/Line/Line.comp";
import SingleData from "./../../../component/DashboardHome/SingleData/SingleData.comp";
import { DoughnutContainer } from "./../../../component/Charts/Doughnut/Doughnut.comp";

const HomeProfilePage = () => {
  const [data, setData] = useState({
    singleData: {
      total_likes: { count: 99, icon: "eye" },
      product_likes: { count: 5, icon: "box" },
      product_visits: { count: 99, icon: "users" },
      profile_visits: { count: 1000, icon: "users" },
      followers: { count: 99, icon: "users" },
    },
    charts: [
      {
        name: "Profile By Category",
        type: "line",
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
        ],
        data: [
          {
            label: "Category One",
            data: [10, 20, 30, 45, 50, 20, 10, 40],
          },
          {
            label: "Category 2",
            data: [20, 30, 40, 50, 65, 90, 10, 20],
          },
        ],
      },
      {
        name: "Profile By Category",
        type: "doughnut",
        labels: ["one", "two", "three", "four"],
        data: [
          {
            label: "Category One",
            data: [10, 20, 30, 45, 50, 20, 10, 40],
          },
          {
            label: "Category 2",
            data: [20, 30, 40, 50, 65, 90, 10, 20],
          },
        ],
      },
    ],
  });
  return (
    <Container>
      <SingleDataContainer>
        {Object.keys(data.singleData).map((keys, index) => (
          <SingleData
            key={index}
            data={[
              {
                name: keys,
                items: data.singleData[keys].count,
                icon: data.singleData[keys].icon,
              },
            ]}
          />
        ))}
      </SingleDataContainer>
      {data.charts.map((chart, index) => {
        console.log("====================================");
        console.log(index, chart);
        console.log("====================================");
        if (chart.type === "line")
          return (
            <ChartsContainer>
              <LineContainer {...chart} key={index} />{" "}
            </ChartsContainer>
          );
        else if (chart.type === "doughnut")
          return (
            <ChartsContainer>
              <DoughnutContainer {...chart} key={index} />
            </ChartsContainer>
          );
        else return <></>;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-templete-columns: 2fr 1fr;
  gap: 1rem;
  @media (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const SingleDataContainer = styled.div({
  gridArea: "1 / 1 / 2 / 3",
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
});

const ChartsContainer = styled.div({});

export default HomeProfilePage;
