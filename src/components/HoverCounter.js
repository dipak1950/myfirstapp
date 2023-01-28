import React from "react";
import './Counter.css';
import UpdateCom from "./HOC";

class HoverCounter extends React.Component {
    render() {
        const { count, increamentd, decreamentd } = this.props;

        return (
            <>

                <h1 onMouseEnter={increamentd}>
                    Hover Base {count} Components
                </h1>

                <h2 onMouseDown={decreamentd}>
                    Hover Base {count} Components
                </h2>
            </>
        )
    }
}

export default UpdateCom(HoverCounter);