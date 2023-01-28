import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { RegisterSchema } from '../Schema/RegisterSchema'

const initialValue = ({
    name: '',
    email: '',
    password: '',
    c_password: ''
});

const getdata = () => {
    let data = window.localStorage.getItem("MyData");
    console.log(data);
    if (data === null || data == '') {
        return [];
    } else {
        return JSON.parse(data);
    }
}
function LocalStorageForm() {

    const [SubmitData, setSubmitData] = useState(getdata());
    const [passwordShown, setPasswordShown] = useState(false);
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

    useEffect(() => {
        window.localStorage.setItem("MyData", JSON.stringify(SubmitData));
        window.localStorage.setItem("Data", "ddddd");
    }, [SubmitData]);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const clearData = () => {
        window.localStorage.clear();
    }

    const removeData = () => {
        window.localStorage.removeItem("Data")
    }


    return (
        <>
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
                <button type="button" onClick={() => { clearData() }}>Clear</button>
                <button type="button" onClick={() => { removeData() }}>remove</button>
            </form>

            <ol>
                {
                    SubmitData.map((v, i) => {
                        // console.log(v);
                        return (
                            <li className="row">
                                <span className="col-2">
                                    {
                                        i + 1
                                    }
                                </span>
                                <span className="col-3">
                                    {
                                        v.name
                                    }
                                </span>
                                <span className="col-4">
                                    {
                                        v.email
                                    }
                                </span>
                                <span className="col-3">
                                    {
                                        <>
                                            <input type={passwordShown ? "text" : "password"} disabled="disabled" value={v.password} style={{ border: 0, backgroundColor: "transparent" }} />
                                            <button onClick={togglePassword}><i class="fa-regular fa-eye-slash"></i></button>
                                        </>
                                    }
                                </span>
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}

export default LocalStorageForm;