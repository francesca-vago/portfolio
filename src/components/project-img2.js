import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const cProjectImg = () => {
    const data = useStaticQuery(graphql`
        query {
        placeholderImage: file(relativePath: { eq: "guide-me.png" }) {
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

export default cProjectImg;