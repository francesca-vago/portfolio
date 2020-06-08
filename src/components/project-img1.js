import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const gProjectImg = () => {
    const data = useStaticQuery(graphql`
        query {
        placeholderImage: file(relativePath: { eq: "borrow-cactus-screenshot.png" }) {
            childImageSharp {
            fixed(width: 200, height: 200){
                ...GatsbyImageSharpFixed
            }
            }
        }
        }
    `)
    return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default gProjectImg;