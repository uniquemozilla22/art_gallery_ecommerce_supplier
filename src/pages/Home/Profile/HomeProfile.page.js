import styled from "@emotion/styled";
import React, { useState } from "react";
import SingleData from "./../../../component/DashboardHome/SingleData/SingleData.comp";

const HomeProfilePage = () => {
  const [data, setData] = useState({
    singleData: {
      total_likes: { count: 99, icon: "eye" },
      product_likes: { count: 5, icon: "box" },
      product_visits: { count: 99, icon: "users" },
      profile_visits: { count: 1000, icon: "users" },
      followers: { count: 99, icon: "users" },
    },
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
    </Container>
  );
};

const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
});
const SingleDataContainer = styled.div({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
});

export default HomeProfilePage;
