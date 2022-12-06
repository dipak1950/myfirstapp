import React from "react";
import './Counter.css';

class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }
    increament() {
        this.setState(() => {
            return {
                count: this.state.count + 1
            }
        })
    }

    decreament() {
        this.setState(() => {
            return {
                count: this.state.count - 1
            }
        })
    }

    render() {
        return (
            <div className="counter">

                <h1>Counter</h1>

                <h3>Class Base Components</h3>
                <p>
                    {this.state.count}
                </p>
                <button
                    onClick={() => {
                        this.increament()
                    }}>
                    +
                </button>
                <button
                    onClick={() => {
                        this.decreament()
                    }} className="b">
                    -
                </button>

            </div>
        );
    }
}

export default Counter;
