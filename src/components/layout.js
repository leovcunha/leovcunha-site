import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import LinksBar from "./linksbar";
import MobileLinksMenu from "./mobilelinksmenu";
import SocialButtons from "./social-buttons";
import useScrollPosition from "./useScrollPosition";

import styled from "@emotion/styled";
import Img from "gatsby-image";
import { css, jsx, Global } from "@emotion/react";

const PositionedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 680px) {
    align-items: inherit;
  }
  height: 100%;
`;
const Layout = ({ location, title, children, socialNetworks }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
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
  `);

  const screen =
    typeof window !== `undefined` ? window.screen : { width: 1080 };

  const [screenWidth, setScreenWidth] = React.useState(screen.width);
  const [scrollPosition, setScrollPosition] = useScrollPosition();

  React.useEffect(() => {
    const handleResize = () => setScreenWidth(screen.width);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (location.pathname === rootPath) {
    header = (
      <PositionedDiv
        scrollPosition={scrollPosition}
        id="header"
        css={css`
          transition: top, position 1s;
        `}
      >
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
              alt="Leo V. Cunha"
              border="0"
              css={css`
                visibility: ${scrollPosition > 0 ? "collapse" : "visible"};
                @media (min-width: 680px) {
                  width: 20rem;
                }
                @media (max-width: 680px) {
                  width: 60%;
                }
              `}
            />
          </Link>
        </h1>
        <div
          css={css`
            ${scrollPosition > 50 &&
            `
            position: fixed;
            top: 1rem;
            right: 1.4rem;
            `}
          `}
        >
          {screen.width < 680 ? (
            <MobileLinksMenu location={location} />
          ) : (
            <LinksBar location={location} />
          )}
        </div>
      </PositionedDiv>
    );
  } else {
    header = (
      <PositionedDiv scrollPosition={scrollPosition} id="header">
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
              alt="Leo V. Cunha"
              border="0"
              css={css`
                @media (min-width: 680px) {
                  width: 20rem;
                }
                @media (max-width: 680px) {
                  width: 60%;
                }
              `}
            />
          </Link>
        </h3>
        {screenWidth < 680 ? (
          <MobileLinksMenu />
        ) : (
          <LinksBar location={location} />
        )}
      </PositionedDiv>
    );
  }
  return (
    <div
      css={css`
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
        a {
          color: #292859;
        }
        max-width: 100%;
        #header,
        #projects,
        #contact,
        #bio {
          padding: ${rhythm(0.1)} ${rhythm(3 / 4)};
        }
      `}
    >
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          body {
            font-family: "Raleway", sans-serif;
          }
          a,
          h3 {
            font-family: "Raleway", sans-serif;
            color: #292859;
          }
        `}
      />
      <header>{header}</header>
      <main>{children}</main>
      <SocialButtons {...socialNetworks} />
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
          zIndex: -2,
          height: "100%",
          width: "100%",
          opacity: 0.4,
        }}
      />
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
