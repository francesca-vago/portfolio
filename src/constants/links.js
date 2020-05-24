import React from "react"
import { Link } from "gatsby"

const links = [
    {
        id: 1,
        text: "home",
        url: "/"
    },
    {
        id: 2,
        text: "about",
        url: "/about"
    }
]

const LinksList = data.map(link => {
    return (
        <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
        </li>
    )
})

export default ({styleClass}) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`}>
            {LinksList}
        </ul>
    )
}
