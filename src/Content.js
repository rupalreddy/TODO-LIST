import React from "react";
import ItemsList from "./ItemsList";



function Content({ items, handleCheck, handleDelete }) {

    return (

        <>
            {(items.length) ? (
                <ItemsList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete} />
            ) : (<h1 style={{ marginTop: '2rem' }}>Your List is Empty</h1>
            )}
        </>
    );

}
export default Content