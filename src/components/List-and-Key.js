import React, { useState } from "react";

function List() {

    const [items, setItems] = useState([1, 2, 3])

    let addlist = () => {
        setItems([0, 8, 1, 2, 3, 4, 5])
    }

    return (
        <>
            <ul>
                {
                    items.map((item) => {
                        return (
                            <li key={item}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>

            <button onClick={() => { addlist() }}>
                Add List
            </button>
        </>

    )
}
export default List;