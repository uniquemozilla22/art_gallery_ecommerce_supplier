import React from "react";
import styled from "@emotion/styled";
import { CreditCard, Visibility } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const FinanceIndicatorComponent = ({ balance }) => {
  return (
    <Wrapper>
      <ActionsContainer>
        <Button>
          <Tooltip title="Go to Payment">
            <CreditCard />
          </Tooltip>
        </Button>
        <Button>
          <Tooltip title="See Payment Invoices">
            <Visibility />
          </Tooltip>
        </Button>
      </ActionsContainer>
      <ContentContainer>
        <BalanceTitle>Your Balance</BalanceTitle>
        <Balance>
          {balance.toLocaleString("en-IN", {
            style: "currency",
            currency: "NRS",
          })}
        </Balance>
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: "#4267B2",
  display: "flex",
  justifyContent: "space-between",
  color: "#f8f8f8",
  padding: "1rem 2rem",
  alignItems: "center",
  borderRadius: "20px",
  height: "100%",
});
const ActionsContainer = styled.div({
  display: "flex",
  gap: "1rem",
  height: "max-content",
  alignContent: "center",
});
const Button = styled.button({
  background: "#f8f8f8",
  padding: "1rem",
  borderRadius: "20px",
  border: "none",
});
const ContentContainer = styled.div({
  textAlign: "right",
});

const Balance = styled.h2({
  margin: "0",
  fontSize: "1.5rem",
});

const BalanceTitle = styled.p({
  margin: "0",
});

export default FinanceIndicatorComponent;
