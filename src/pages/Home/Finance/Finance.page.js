import styled from "@emotion/styled";
import React, { useState } from "react";
import { DoughnutContainer } from "../../../component/Charts/Doughnut/Doughnut.comp";
import { LineContainer } from "../../../component/Charts/Line/Line.comp";
import SingleData from "../../../component/DashboardHome/SingleData/SingleData.comp";
import FinanceIndicatorComponent from "../../../component/FinanceIndicator/FInanceIndicator.comp";
import RecentInvoice from "../../../component/RecentInvoice/RecentInvoice.comp";

const FinancePage = () => {
  const [data, setData] = useState({
    singleData: {
      total_sales: {
        count: (90000).toLocaleString("en-IN", {
          style: "currency",
          currency: "NRS",
        }),
        icon: "dollar-sign",
      },
      todays_sales: {
        count: (20000).toLocaleString("en-IN", {
          style: "currency",
          currency: "NRS",
        }),
        icon: "clock",
      },
      profits: {
        count: (200000).toLocaleString("en-IN", {
          style: "currency",
          currency: "NRS",
        }),
        icon: "bar-chart",
      },
    },
    recent_orders: [
      {
        title: "Order received",
        info: {
          name: "Yogesh Bhattarai",
          orderID: "988242134",
        },

        image:
          "https://www.mona.com.np/get-image/art_media_main/premman_photo1_1583989915.jpg",
      },
      {
        title: "Order received",
        info: {
          name: "Yogesh Bhandari",
          orderID: "988242134",
        },
      },
    ],
    charts: [
      {
        name: "Orders By Category",
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
        name: "Orders By Category",
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

  const balance = 200000;
  return (
    <FinancePageContainer>
      <SingleContainer>
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
      </SingleContainer>
      <FinanceIndicatorComponent balance={balance} />
      <RecentInvoice />
      {data.charts.map((chart, index) => {
        if (chart.type === "line")
          return <LineContainer {...chart} key={index} />;
        else if (chart.type === "doughnut")
          return <DoughnutContainer {...chart} key={index} />;
        else return <></>;
      })}
    </FinancePageContainer>
  );
};

const FinancePageContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "3fr 2fr",
  gap: "1rem",
});

const SingleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FinanceIndicatorContainer = styled.div``;

export default FinancePage;
