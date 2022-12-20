import React, { useState } from "react";
import "./Counter.css"

function FormHandle() {

    const [name, setName] = useState('');
    const [fullname, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');

    const changeName = (e) => {
        // console.log(e.target.value);
        setName(e.target.value)
        setfullName(e.target.value)
    } 

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const changeMobile = (e) => {
        setMobile(e.target.value)
    }

    const submitData = (e) => {
        e.preventDefault();
        // alert(`Hellooo  ${name}`)
        document.getElementById("name").innerHTML = `Name: ${name}`
        document.getElementById("email").innerHTML = `Email: ${email}`
        document.getElementById("password").innerHTML = `Password: ${password}`
        document.getElementById("mobile").innerHTML = `Mobile: ${mobile}`
        fullname(name)
    }


    return (
        <div className="formhandle">
            <form onSubmit={(e) => { submitData(e) }}>
                <h1>
                    FORM HANDLE
                </h1>
                <p id="name">

                </p>
                <p id="email">

                </p>
                <p id="password">

                </p>
                <p id="mobile">

                </p>
                <label>
                    Name
                </label>
                <br />
                <input onChange={(e) => { changeName(e) }} type="text" name="name" placeholder="Enter your name" />
                <br />
                <label>
                    Email
                </label>
                <br />
                <input onChange={(e) => { changeEmail(e) }} type="email" name="email" placeholder="Enter your email" />
                <br />
                <label>
                    Mobile
                </label>
                <br />
                <input onChange={(e) => { changeMobile(e) }} type="number" name="mobile" placeholder="Enter your mobile" />
                <br />
                <label>
                    Password
                </label>
                <br />
                <input onChange={(e) => { changePassword(e) }} type="password" name="password" placeholder="Enter your password" />
                <br />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormHandle;