import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component';
const DefaultLayoutHOC = (Component) => ({ ...props }) => {
    return (
        <div>
            <div>
                <Navbar />
                <Component {...props} />
                <div>Footer</div>
            </div>
        </div>
    )
}

export default DefaultLayoutHOC