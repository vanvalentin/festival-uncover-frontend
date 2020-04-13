import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/logo_98x70.png" } ) {
        childImageSharp {
          fluid(maxWidth: 98, maxHeight: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img className="brand" fluid={data.logo.childImageSharp.fluid} />
}

export default Logo