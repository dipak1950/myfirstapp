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
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    delete() {
        this.setState({
            count: 0
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
                    <i class="fa-solid fa-plus"></i>
                </button>

                <button
                    onClick={() => {
                        this.decreament()
                    }}>
                    <i class="fa-solid fa-minus"></i>
                </button>

                <button
                    onClick={() => {
                        this.delete()
                    }}>
                    <i class="fa-solid fa-trash-can"></i>
                </button>

            </div>
        );
    }
}

export default Counter;
