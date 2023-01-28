import React from "react";
import { useState } from "react";
import "./Counter.css"

function FormManage() {
    const [Data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    })
    const [SubmitData, setSubmitData] = useState([])

    const Handleform = (e) => {
        //    console.log(e);
        const formname = e.target.name
        const value = e.target.value

        setData({ ...Data, [formname]: value })

    }
    const Submit = (e) => {
        e.preventDefault();
        const newData = Data;
        setSubmitData([...SubmitData, newData])
        setData({
            name: '',
            email: '',
            mobile: '',
            password: ''
        })
    }

    return (
        <>
            <h1>Form Manage</h1>

            <form onSubmit={Submit}>
                <label>
                    Name :
                </label>
                <input type="text" name="name" onChange={Handleform} value={Data.name} />
                <br />
                <label>
                    Email :
                </label>
                <input type="text" name="email" onChange={Handleform} value={Data.email} />
                <br />
                <label>
                    Mobile :
                </label>
                <input type="text" name="mobile" onChange={Handleform} value={Data.mobile} />
                <br />
                <label>
                    Password :
                </label>
                <input type="text" name="password" onChange={Handleform} value={Data.password} />
                <br />
                <br />
                <input type="submit" />
            </form>
            {
                SubmitData.map((v, i) => {
                    // console.log(v);
                    return (
                        <div className="" key={i} id={i}>
                            <table width={1345} border={1} cellPadding={5} cellSpacing={10}>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{v.name}</td>
                                    <td>{v.email}</td>
                                    <td>{v.mobile}</td>
                                    <td>{v.password}</td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FormManage;