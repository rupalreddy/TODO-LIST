import React from 'react';
import { FaPlus } from "react-icons/fa";
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

    const inputRef = useRef()

    return (

        <form className="addF" onSubmit={handleSubmit}>
            <label
                className='addLabel'
                htmlFor="addItem">Add Item</label>
            <input
                className='addInput'
                autoFocus
                ref={inputRef}
                type="text"
                id="addItem"
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                className='addButton'
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                < FaPlus />
            </button>
        </form>
    )
}

export default AddItem