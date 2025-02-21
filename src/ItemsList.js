import React from 'react';
import ListItem from './ListItem';


const ItemsList = ({ items, handleCheck, handleDelete }) => {
    return (

        <ul>
            {items.map((item) => (
                < ListItem
                    item={item}
                    key={item.id}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />

            ))}
        </ul>

    )
}

export default ItemsList