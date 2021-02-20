import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import LinksBar from "./linksbar"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { css, jsx } from "@emotion/react"

const PositionedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const data = useStaticQuery(graphql`
    query layout {
      neural: file(absolutePath: { regex: "/cool_neural_network.jpeg/" }) {
        childImageSharp {
          fixed(width: 800, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (location.pathname === rootPath) {
    header = (
      <PositionedDiv>
        <h1
          style={{
            ...scale(1.0),
            marginBottom: rhythm(0.1),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <img
              src="https://fontmeme.com/permalink/210220/015d310afe6d9b998de64b217a8cf927.png"
              alt="fonte-xtreem"
              border="0"
              css={css`
                width: 20rem;
              `}
            />
          </Link>
        </h1>
        <LinksBar></LinksBar>
      </PositionedDiv>
    )
  } else {
    header = (
      <PositionedDiv>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <img
              src="https://fontmeme.com/permalink/210220/015d310afe6d9b998de64b217a8cf927.png"
              alt="fonte-xtreem"
              border="0"
            />
          </Link>
        </h3>
        <LinksBar></LinksBar>
      </PositionedDiv>
    )
  }
  return (
    <div
      css={css`
        margin-left: auto;
        margin-right: auto;
        max-width: ${rhythm(36)};
        padding: ${rhythm(0.1)} ${rhythm(3 / 4)};
        a {
          color: #292859;
        }
      `}
    >
      <header>{header}</header>
      <main>{children}</main>
      <Img
        fixed={data.neural.childImageSharp.fixed}
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          overflow: "hidden",
          display: "inline-block",
          width: "800px",
          height: "600px",
          zIndex: -1,
          height: "100%",
          width: "100%",
          opacity: 0.2,
        }}
      />
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
