import React, { useContext } from 'react'
import { Buttons, Menus } from './App'

function ComMenu() {
    const Name = useContext(Menus);
    const Btn = useContext(Buttons);
    // console.log(m)
    return (
        <>
            <div>ComMenu</div>
            <h1>
                {
                    Name + Btn

                }
            </h1>
            {/* <Menus.Consumer>
                {
                    (data) => {
                        return (
                            <h1>
                                {
                                    data
                                }
                            </h1>
                        )
                    }
                }
            </Menus.Consumer> */}
        </>
    )
}

export default ComMenu