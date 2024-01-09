import Header from "./Header";
import styled from "styled-components";
import TopSection from "./TopSection";
import Transactions from "./Transactions";

const PayoutMain = ({ setIsSideBarClosed }) => {
  return (
    <section>
      <Header setIsSideBarClosed={setIsSideBarClosed} />
      <MainContainer>
        <TopSection />
        <Transactions />
      </MainContainer>
    </section>
  );
};

const MainContainer = styled.main`
  width: 100%;
  height: calc(100vh - 64px);
  overflow: hidden;
  padding: 32px;
  @media only screen and (max-width: 675px) {
    padding: 8px;
  }
`;

export default PayoutMain;
