import React from 'react'
import { memo } from 'react';

function AddList({ add, list }) {

    console.log("Add List")
    // console.log("add")

    return (
        <>
            <h2>
                Add List
            </h2>
            <button onClick={() => { add() }}>
                add
            </button>
            <ul>
                {
                    list.map((li, id) => {
                        // console.log("limmm", li)
                        return (
                            <li key={id}>
                                {
                                    li + id
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default memo(AddList);