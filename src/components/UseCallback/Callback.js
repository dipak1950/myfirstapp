import React, { useCallback, useState } from 'react'
import AddList from './AddList';

function Callback() {

    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);

    const handleClick = () => {
        console.log("handleClick");
        setCount(count + 1)
    }

    const add = useCallback(() => {
        setList((pr) => [...pr, "New DS"])
    }, [list])

    // const add = () => {
    //     setList((pr) => [...pr, "New DS"])
    // }

    return (
        <>
            <h1>
                Use Call back
            </h1>
            <h3>
                {
                    count
                }
            </h3>

            <AddList add={add} list={list} />

            <button onClick={() => { handleClick() }}>
                +
            </button>

        </>
    )
}

export default Callback;