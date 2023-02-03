import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

const InitialValue = {
    count: 0
}

const reducer = (state, action) => {
    console.log("reducer", action);

    switch (action.type) {
        case "Inc":
            state = {
                count: state.count + 1
            }
            return state
            break;

        case "Dsc":
            state = {
                count: state.count - 1
            }
            return state
            break;
        default:
            return state;
    }
}

function ReducerCom() {

    const [state, dispatch] = useReducer(reducer, InitialValue)

    return (
        <>
            <h1>
                {
                    state.count
                }
            </h1>
            <button onClick={() => dispatch({ type: "Inc" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "Dsc" })}>
                Decrement
            </button>
        </>
    )
}

export default ReducerCom;