import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { date } from 'yup';
import gatdata from './Getdata';

function Addemployee() {

    const [initial, setInitial] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        address: ''
    });

    const [isSubmit, setIsSubmit] = useState(false);
    const [store, setStore] = useState(gatdata);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInitial({ ...initial, [name]: value, id: new Date().toLocaleTimeString() });
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        const { name, email, mobile, gender, address } = initial;
        if (name == '' || email == '' || mobile == '' || gender == '' || address == '') {
            console.error("Enter value")
        } else {
            setStore([...store, initial]);
            setIsSubmit(true)
            setInitial({
                name: '',
                email: '',
                mobile: '',
                gender: '',
                address: ''
            });
            // navigate('/empview', { state: { data: [...store, initial] } })
        }
    }

    useEffect(() => {
        console.log("store useEfect");
        localStorage.setItem("crud", JSON.stringify(store));
        if (isSubmit) {
            navigate("/empview");
        }
    }, [store])


    const back = () => {
        navigate(-1)
    }

    return (
        <>
            <Container>
                <h1>
                    Add Employee
                </h1>
                <Form onSubmit={HandleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name='name' value={initial.name} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter your email" name='email' value={initial.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control type="text" placeholder="Enter your mobile" name='mobile' value={initial.mobile} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Gender: </Form.Label>
                        <br></br>
                        <Form.Check
                            inline
                            label="Male"
                            name="gender"
                            type='radio'
                            value='male'
                            onChange={handleChange}
                            checked={initial.gender == 'male'}
                        />
                        <Form.Check
                            inline
                            label="Femele"
                            name="gender"
                            type='radio'
                            value='femele'
                            onChange={handleChange}
                            checked={initial.gender == 'femele'}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your address" name='address' value={initial.address} onChange={(e) => { handleChange(e) }} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="primary" className='m-2' onClick={() => { back() }}>
                        Back
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Addemployee