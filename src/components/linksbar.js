import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const PositionedBar = styled.div`
  margin-right: 2rem;
  color: #292859;
  ${"a"} {
    box-shadow: none;
    padding-right: 10px;
  }
  @media (max-width: 680px) {
    visibility: hidden;
  }
`
const LinksBar = props => {
  return (
    <PositionedBar>
      <Link to={`/about`}>About</Link>
      <Link to={`/projects`}>Projects</Link>
      <Link to={`/writings`}>Writings</Link>
      <Link to={`/cotact`}>Contact</Link>
    </PositionedBar>
  )
}

export default LinksBar
