import React from 'react'

const MainContainer = ({children}) => {
    return (
        <div className="flex min-h-screen max-w-7xl mx-auto">
            {children}
        </div>
    )
}

export default MainContainer
