import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { RemoveRedEyeOutlined } from "@mui/icons-material";

const RecentInvoice = ({ table }) => {
  return (
    <Wrapper>
      <Title>
        <HeadingContainer>
          <Heading>Recent Invoices</Heading>
          <SubHeading> List of all transactions</SubHeading>
        </HeadingContainer>
        <Linked to="./">See All</Linked>
      </Title>
      <Table>
        <TableRow heading>
          <TableData front>Id</TableData>
          <TableData>Amount</TableData>
          <TableData>OrderID</TableData>
          <TableData>Date</TableData>
          <TableData end>Actions</TableData>
        </TableRow>
        <TableRow>
          <TableData front>#354622</TableData>
          <TableData>
            {parseInt("20000").toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "NRS",
            })}
          </TableData>
          <TableData>#2b2b2b</TableData>
          <TableData>{new Date().toLocaleDateString()}</TableData>
          <TableData end>
            <RemoveRedEyeOutlined />
          </TableData>
        </TableRow>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div({});
const Title = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const HeadingContainer = styled.div({});

const Heading = styled.h2({
  fontSize: "2rem",
  margin: 0,
  fontWeight: "bold",
});
const SubHeading = styled.h2({
  margin: 0,
  fontSize: "0.9rem",
  fontWeight: "medium",
  color: "#888686",
});

const Linked = styled(Link)`
  text-decoration: none;
  color: #2b2b2b;
  font-size: 12px;
`;
const Table = styled.table({
  display: "flex",
  flexDirection: "column",
});
const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: ${(props) => props.heading && "bold"};
  color: ${(props) => props.heading && "#676FA3"};
  background: ${(props) => !props.heading && "#eef2ff"};
  padding: 1rem;
`;

const TableData = styled.td`
  flex: 1;
  padding: 1rem 0;
  align-items: center;
  text-align: ${(props) =>
    props.front ? "left" : props.end ? "right" : "center"};
`;

export default RecentInvoice;
