import React from 'react'
import { Header } from './'

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-100">
            <Header />
            {children}
        </div>
    )
}

export default Layout
