import { stringify } from '@firebase/util'
import React, { useEffect } from 'react'
import db from '../firebase'

const MainContainer = ({children}) => {
    return (
        <div className="flex min-h-screen max-w-7xl mx-auto">
            {children}
        </div>
    )
}

export default MainContainer
