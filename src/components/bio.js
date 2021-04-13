/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/react"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import useScrollPosition from "./useScrollPosition"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const centralize = `
  flex-direction: column;
  align-items: center;
  text-align: center;
  `

  const { author, social } = data.site.siteMetadata

  const [scroll, setScroll] = useScrollPosition()

  return (
    <div
      id="about"
      css={css`
        display: flex;
        margin-top: 6rem;
        margin-bottom: 15rem;
        transition: opacity 2s;
        opacity: ${/*scroll > 0 ? 0 :*/ 1};
        ${centralize}
      `}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: `1rem`,
          minWidth: 150,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        {author.name} {author.summary}
        {` `}
        <br />
        To know more about me take a look at my <a href="/cv">resume</a>
      </p>
      <p></p>
    </div>
  )
}

export default Bio
