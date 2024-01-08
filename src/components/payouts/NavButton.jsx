import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const NavButton = ({ icon, text }) => {
  return (
    <StyledNavButton>
      <ReactSVG src={icon} />
      <p>{text}</p>
    </StyledNavButton>
  );
};

const StyledNavButton = styled.a`
  width: 100%;
  height: 36px;
  padding: 8px 16px;
  display: flex;
  color: #d2d4d9;
  align-items: center;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: medium;
  p {
    margin-left: 12px;
  }
`;
export default NavButton;
