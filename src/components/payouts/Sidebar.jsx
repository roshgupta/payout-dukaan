import styled from "styled-components";
import NavButton from "./NavButton";
import { ReactSVG } from "react-svg";

const Sidebar = () => {
  return (
    <StyledSideSection>
      <StyledTop>
        <img
          src="/images/company.png"
          height={40}
          width={40}
          alt="Company Logo"
        />
        <div>
          <p>Nishyan</p>
          <a href="#">Visit store</a>
        </div>
        <ReactSVG src="/icons/down.svg" />
      </StyledTop>
      <NavButton icon="/icons/home.svg" text="Home" />
      <NavButton icon="/icons/orders.svg" text="Orders" />
      <NavButton icon="/icons/products.svg" text="Products" />
      <NavButton icon="/icons/delivery.svg" text="Delivery" />
      <NavButton icon="/icons/marketing.svg" text="Marketing" />
      <NavButton icon="/icons/analytics.svg" text="Analytics" />
      <NavButton icon="/icons/payouts.svg" text="Payouts" />
      <NavButton icon="/icons/discounts.svg" text="Discounts" />
      <NavButton icon="/icons/audience.svg" text="Audience" />
      <NavButton icon="/icons/appearance.svg" text="Appearance" />
      <NavButton icon="/icons/plugins.svg" text="Plugins" />
      <StyledBottom>
        <div className="sidebar-bottom-wallet">
          <ReactSVG src="/icons/wallet.svg" />
        </div>
        <div className="sidebar-bottom-credits">
          <p className="text">Available credits</p>
          <p className="amount">222.10</p>
        </div>
      </StyledBottom>
    </StyledSideSection>
  );
};

const StyledSideSection = styled.section`
  min-width: 224px;
  cursor: pointer;
  height: 100%;
  width: auto;
  background-color: #1e2640;
  padding: 16px 8px;
  color: #d2d4d9;
  display: flex;
  flex-direction: column;
`;
const StyledTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-left: 8px;
  padding-right: 8px;
  div p {
    font-size: 15px;
  }
  div a {
    font-size: 13px;
    color: #d2d4d9;
    text-decoration: underline;
  }
`;

const StyledBottom = styled.div`
  width: auto;
  height: 54px;
  background-color: #353c53;
  border-radius: 4px;
  margin-top: auto;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  .sidebar-bottom-wallet {
    height: 36px;
    width: 36px;
    border-radius: 4px;
    margin-right: 12px;
    background-color: #ffffff19;
    display: flex;
    justify-content: center;
    align-items: center;
    > div > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .sidebar-bottom-credits {
    color: #fff;
    .text {
      font-size: 13px;
      font-weight: medium;
      line-height: 16px;
    }
    .amount {
      font-size: 16px;
      font-weight: medium;
      line-height: 24px;
    }
  }
`;

export default Sidebar;
