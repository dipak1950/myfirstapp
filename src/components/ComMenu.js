import React from 'react'
import { Menus } from './App'

function ComMenu() {
    return (
        <>
            <div>ComMenu</div>
            <Menus.Consumer>
                {
                    (data) => {
                        // console.log(data);
                        return (
                            <h1>
                                {
                                    data
                                }
                            </h1>
                        )
                    }
                }
            </Menus.Consumer>
        </>
    )
}

export default ComMenu