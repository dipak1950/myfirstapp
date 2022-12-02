import React from "react";
import './Travel.css';

function Menu(props) {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <img src={props.logo} alt="logo" /> 
                        <div className="nav-bar">
                            <ul>
                                {
                                    props.list.map((v) => {
                                        return (
                                            <li>
                                                <a href="#">{v}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="contect-detail">
                            <button>Login</button>
                            {/* <span>USD</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Menu;