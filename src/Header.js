import React from 'react'

const Header = ({ title }) => {

    return (
        <div className='Headerstyle'>
            <h1>{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'TODO LIST'
}

export default Header