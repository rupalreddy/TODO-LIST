import React from 'react'

const Footer = ({ length }) => {


    return (
        <div className='Footerstyle'>{length} List {length === 1 ? 'Item' :
            'Items'} </div>
    )
}

export default Footer