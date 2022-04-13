import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
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
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allFile.edges.map((image: any, index: number) => {
        return image.node.base === props.fileName ? (
          <GatsbyImage
            image={image.node.childImageSharp.gatsbyImageData}
            alt={image.node.base.split(".")[0]}
            key={index}
            style={{height: '100%', width: '100%'}}
          />
        ) : (
          ""
        )
      })}
    </>
  )
}

export default CustomImage
