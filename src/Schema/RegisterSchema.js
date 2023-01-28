import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
    name: Yup.string().max(5).required("please Enter Your Name"),
    email: Yup.string().email().required("please Enter Your Email"),
    password: Yup.string().max(9).required("please Enter Your Password"),
    c_password: Yup.string().oneOf([Yup.ref("password")], "password much match").required("please Enter Your confirm pasword")
})  