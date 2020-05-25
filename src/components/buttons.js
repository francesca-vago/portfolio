import React from 'react'

import "./buttons.css"

export const BlackButton = ({children}) => {
    return (
        <button className="btn btn-black">
            {children}
        </button>
    )
}

