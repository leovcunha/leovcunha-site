import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Divider from "@material-ui/core/Divider"
import Projects from "../components/projects"
import Contact from "../components/contact"
const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const socialNetworks = data.site.siteMetadata.social

  return (
    <Layout
      location={location}
      title={siteTitle}
      socialNetworks={socialNetworks}
    >
      <SEO title="Software Engineer" />

      <Bio />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`
