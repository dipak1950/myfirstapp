import React from "react";
import './Counter.css';
import UpdateCom from "./HOC";

class Counter extends React.Component {


    render() {
        const { count, increamentd, decreamentd, deleted} = this.props;

        return (
            <div className="counter">

                <h1>Counter</h1>

                <h3>Class Base Components</h3>
                <p>
                    {count}
                </p>
                <button
                    onClick={increamentd}>
                    <i class="fa-solid fa-plus"></i>
                </button>

                <button
                    onClick={decreamentd}>
                    <i class="fa-solid fa-minus"></i>
                </button>

                <button
                    onClick={deleted}>
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        );
    }
}

export default UpdateCom(Counter);
