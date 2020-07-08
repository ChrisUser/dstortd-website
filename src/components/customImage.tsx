import Img from "gatsby-image"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  fileName: string
}

const CustomImage: React.FC<Props> = props => {
  const data: any = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allFile.edges.map((image, index) => {
        return image.node.base === props.fileName ? (
          <Img
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]}
            key={index}
          />
        ) : (
          ""
        )
      })}
    </>
  )
}

export default CustomImage
