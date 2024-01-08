import styled from "styled-components";
import { ReactSVG } from "react-svg";

const Header = () => {
  return (
    <StyledHeader>
      <div className="title">
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
  .title {
    display: flex;
    flex-grow: 1;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    max-width: 360px;
    h1 {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
    }
    .ques {
      color: #4d4d4d;
      display: flex;
      align-items: center;
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
    height: 40px;
    position: relative;
    flex-grow: 1;
    input {
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
      background-color: #f2f2f2;
      color: #808080;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 40px;
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
