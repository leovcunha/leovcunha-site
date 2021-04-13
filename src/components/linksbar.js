import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import useScrollPosition from "./useScrollPosition";

const PositionedBar = styled.div`
  margin-right: 2rem;
  color: #292859;
  ${"a"} {
    box-shadow: none;
    padding: 10px;
    margin-right: 10px;
  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    ${"a"} {
      padding-bottom: 1rem;
      color: #292859;
    }
  }
`;

const ColorLink = styled(Link)`
  :hover,
  :active,
  :focus {
    background-color: #292859;
    color: white;
  }
`;
const LinksBar = props => {
  return (
    <PositionedBar>
      <ColorLink to={`/`}>About</ColorLink>
      <ColorLink to={`/#projects`}>Projects</ColorLink>
      <ColorLink to={`/#contact`}>Contact</ColorLink>
    </PositionedBar>
  );
};

export default LinksBar;
