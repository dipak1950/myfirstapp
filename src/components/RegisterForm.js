import React, { useState } from "react";
import { useFormik } from "formik";
import { RegisterSchema } from '../Schema/RegisterSchema'

const initialValue = ({
    name: '',
    email: '',
    password: '',
    c_password: ''
});

function RegisterForm() {

    const [SubmitData, setSubmitData] = useState([])
    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({

        initialValues: initialValue,
        validationSchema: RegisterSchema,
        onSubmit: (values, action) => {

            const newData = values;
            setSubmitData([...SubmitData, newData])

            console.log(values);
            action.resetForm('')
        }
    });

    return (
        <>
            <h1>Register Form</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    Name :
                </label>
                <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {
                    touched.name && errors.name ?
                        <span>
                            {
                                errors.name
                            }
                        </span> : ''
                }
                <br />
                <br />
                <label>
                    Email :
                </label>
                <input type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {
                    touched.email && errors.email ?
                        <span>
                            {
                                errors.email
                            }
                        </span> : ''
                }
                <br />
                <br />
                <label>
                    Password :
                </label>
                <input type="text" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {
                    touched.password && errors.password ?
                        <span>
                            {
                                errors.password
                            }
                        </span> : ''
                }
                <br />
                <br />
                <label>
                    Confirm Password :
                </label>
                <input type="text" name="c_password" value={values.c_password} onChange={handleChange} onBlur={handleBlur} />
                {
                    touched.c_password && errors.c_password ?
                        <span>
                            {
                                errors.c_password
                            }
                        </span> : ''
                }
                <br />
                <br />
                <button type="submit">Submit</button>
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

export default RegisterForm;