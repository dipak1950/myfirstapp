import React, { useEffect, useState } from "react";

function CounterFunUse() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = ` Click ${count}`;

    })

    return (
        <>
            <h1>
                {count}
            </h1>
            <button onClick={() => { setCount(count + 1) }}>
                Click
            </button>
        </>
    )
}

export default CounterFunUse;