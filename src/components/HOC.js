import React from "react";

function UpdateCom(OrignalCom) {

    class NewCom extends React.Component {

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
                <OrignalCom count={this.state.count} increamentd={() => { this.increament() }} decreamentd={() => { this.decreament() }} deleted={() => { this.delete() }} />
            )
        }
    }

    return NewCom;
}

export default UpdateCom;