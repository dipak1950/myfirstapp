import React, { useState } from "react";
import './Counter.css';

function CounterFunHook() {

    const [name, setName] = useState("dipak");
    const [count, setCount] = useState(0);

    let changeNmae = () => {
        setName((prevStete) => {
            return (prevStete = "raj")
        })
    }

    let increament = () => {
        setCount((prevStete) => {
            return (prevStete + 1)
        })
    }

    let decreament = () => {
        setCount((prevStete) => {
            if (prevStete > 0) {
                return (prevStete - 1)
            } else {
                return 0
            }
        })
    }

    return (
        <div className="counter">
            <h1>Counter</h1>

            <h2>
                function Hook Base Components
            </h2>
            <h3>
                name {name} time {count}
            </h3>

            <button onClick={() => { changeNmae() }}>
                <i class="fa-regular fa-circle-check"></i>
            </button>

            <button onClick={() => { increament() }}>
                <i class="fa-solid fa-plus"></i>
            </button>

            <button onClick={() => { decreament() }}>
                <i class="fa-solid fa-minus"></i>

            </button>
        </div>
    )
}

export default CounterFunHook;