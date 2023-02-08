import React, { useMemo, useState } from 'react'

function Memoazation() {

    const [Add, setAdd] = useState(0);
    const [Minus, setMinus] = useState(100);

    // const multi = () => {
    //     console.log("call me");
    //     return Add * 10;
    // }
    // const Multipication = multi;


    const Multipication = useMemo(Multipication=> {
        console.log("call me");
        return Add * 10;
    }, [Add])

    return (
        <>
            <h1>
                {
                    Add
                }
            </h1>
            <button onClick={() => setAdd(Add + 1)}>
                +
            </button>
            <button onClick={() => setMinus(Minus - 1)}>
                -
            </button>
            <h1>
                {
                    Minus
                }
            </h1>
            <h1>
                {
                    Multipication
                }
            </h1>
        </>
    )
}

export default Memoazation