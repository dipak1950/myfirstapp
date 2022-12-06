import React from "react";
import './Theme.css';

class Themechange extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundcolor: 'black',
            color: 'white'
        }
    }
    click() {
        this.setState({
            backgroundcolor: 'yellow',
            color: 'red'

        })
    }

    on() {
        this.setState({
            backgroundcolor: 'black',
            color: 'blue'

        })
    }

    ok() {
        this.setState({
            backgroundcolor: 'red',
            color: 'yellow'

        })
    }

    render() {
        return (

            <div className="theme" style={{ background: this.state.backgroundcolor }}>

                <h1>Theme Change</h1>

                <p style={{ color: this.state.color}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. {this.state.color} </p>
                <button onClick={() => { this.click() }}> Click </button>
                <button onClick={() => { this.on() }}> On </button>
                <button onClick={() => { this.ok() }}> ok </button>
            </div>
        )
    }
}

export default Themechange;