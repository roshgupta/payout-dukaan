import styled from "styled-components";
import { ReactSVG } from "react-svg";

const Header = ({ setIsSideBarClosed }) => {
  return (
    <StyledHeader>
      <div className="title">
        <ReactSVG
          className="sidebar-close"
          src="/icons/open-sidebar.svg"
          onClick={() => setIsSideBarClosed((value) => !value)}
        />
        <h1>Payouts</h1>
        <div className="ques">
          <ReactSVG src="/icons/ques.svg" className=" svg ques-icon" />
          <p>How it works</p>
        </div>
      </div>
      <div className="inputbox">
        <input type="text" placeholder="Search features, tutorials, etc." />
        <ReactSVG src="/icons/search.svg" className="search-icon" />
      </div>
      <div className="icon-menu">
        <div className="icon-menu-icons">
          <ReactSVG src="/icons/message.svg" />
        </div>
        <div className="icon-menu-icons">
          <ReactSVG src="/icons/menu-down.svg" />
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  padding: 12px 32px;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 675px) {
    gap: 8px;
    padding: 12px 8px;
  }
  .title {
    display: flex;
    flex-grow: 1;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    max-width: 360px;
    @media only screen and (max-width: 675px) {
      /* flex-shrink: 1; */
      /* max-width: 120px; */
    }
    .sidebar-close {
      display: none;
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media only screen and (max-width: 675px) {
        display: block;
        width: 16px;
        height: 100%;
        cursor: pointer;
      }
    }
    h1 {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
    }
    .ques {
      color: #4d4d4d;
      display: flex;
      align-items: center;
      @media only screen and (max-width: 675px) {
        display: none;
      }
      .ques-icon {
        height: 14px;
        width: 14px;
        margin-right: 6px;

        > div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      p {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
  .inputbox {
    max-width: 400px;
    width: 100%;
    height: 40px;
    position: relative;
    flex-grow: 1;
    @media only screen and (max-width: 675px) {
      /* flex-shrink: 1; */
      /* max-width: 200px; */
    }

    input {
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
      background-color: #f2f2f2;
      color: #808080;
      padding: 12px 12px 12px 40px;
      border-radius: 6px;
      font-size: 15px;
      line-height: 22px;
    }
    .search-icon {
      position: absolute;
      top: 12px;
      left: 16px;
    }
  }
  .icon-menu {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    @media only screen and (max-width: 675px) {
      /* flex-shrink: 1; */
    }
    .icon-menu-icons {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: #e6e6e6;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 12px;
      > div > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
export default Header;
