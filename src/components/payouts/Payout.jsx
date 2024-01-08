import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import PayoutMain from "./PayoutMain";

const Payout = () => {
  return (
    <StyledPayout>
      <Sidebar />
      <PayoutMain />
    </StyledPayout>
  );
};

export default Payout;

const StyledPayout = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 6fr;
`;
