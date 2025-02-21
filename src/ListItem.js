import React from 'react';
import { FaTrash } from "react-icons/fa";

const ListItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className='item'>
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label style={{ textDecoration: item.checked ? 'line-through' : 'none' }}
                onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
            <FaTrash
                role='button'
                onClick={() => handleDelete(item.id)}
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default ListItem