import React from "react";

function Events() {

    return (
        <>
            <button value="Hello...." onClick={e => alert(e.target.value)}>
                Click me
            </button>
            {/* <input onFocus={(e) => {
                console.log('Focused on input');
            }}
            /> */}
            <input
                onBlur={(e) => {
                    console.log('Triggered because this input lost focus');
                }}
            />
        </>
    )
}

export default Events;