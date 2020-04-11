import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"


const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 98, maxHeight: 70, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="brand">
        <Link to={'/'}>
            <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
        </Link>
    </div>
  )
}

export default Logo