import styled from "styled-components";
import Sidebar from "./Sidebar";
import PayoutMain from "./PayoutMain";
import { useState } from "react";

const Payout = () => {
  const [isSideBarClosed, setIsSideBarClosed] = useState(false);
  return (
    <StyledPayout>
      <Sidebar
        isSideBarClosed={isSideBarClosed}
        setIsSideBarClosed={setIsSideBarClosed}
      />
      <PayoutMain setIsSideBarClosed={setIsSideBarClosed} />
    </StyledPayout>
  );
};

export default Payout;

const StyledPayout = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 6fr;
  @media only screen and (max-width: 675px) {
    grid-template-columns: 1fr;
  }
`;
