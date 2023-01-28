import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Container, Table, Row, Button, Form, InputGroup } from 'react-bootstrap'
import gatdata from './Getdata';

function Empview() {

    const [store, setStore] = useState(gatdata);
    const [editInitial, setEditInitial] = useState(
        {
            name: '',
            email: '',
            mobile: '',
            address: '',
            gender: ''
        }
    )
    const [isEdit, setIsEdit] = useState(false);
    const [isSave, setSave] = useState(false);
    const [editIndex, setEditIndex] = useState('');

    const navigate = useNavigate();
    // const location = useLocation();

    const addemployee = () => {
        navigate('/Addemployee')
    }

    const changeInput = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;

        if (isEdit) {
            setEditInitial({ ...editInitial, [fieldName]: value })
        }
    }

    const handleEdit = (index, d) => {

        setIsEdit(true);
        setEditIndex(index);
        setEditInitial(d);
        setSave(false);

    }

    const handleSave = (index) => {
        setIsEdit(false);
        setSave(true);
        const array = store;
        array[index] = editInitial;
        setStore([...array]);
        setEditInitial({
            name: '',
            email: '',
            mobile: '',
            address: '',
            gender: ''
        })
    }

    const handleDelete = (index) => {
        // console.log("handleDelete", index);
        if (isSave) {
            setSave(false);
        } else {
            setSave(true);
        }
        const filterData = store.filter((el, id) => {

            return id !== index;
        })

        setStore([...filterData])

        console.log(filterData);
    }


    useEffect(() => {
        // console.log("USeEffect Save");
        localStorage.setItem("crud", JSON.stringify(store));
    }, [isSave])


    return (
        <>
            <Container>
                <Row>
                    <div className='col-6 p-2'>
                        <h1>Employee View</h1>
                    </div>
                    <div className='col-6 p-3'>
                        <Button variant='primary' onClick={() => { addemployee() }}>Add Employee</Button>
                    </div>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Gender</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                store.map((d, index) => {
                                    return (
                                        <tr key={index} id={index}>
                                            <td>
                                                {
                                                    index + 1
                                                }
                                            </td>
                                            <td>
                                                {
                                                    isEdit && editIndex == index ? <InputGroup className="mb-3 d-inline-block w-100">
                                                        <Form.Control
                                                            value={editInitial.name}
                                                            name='name'
                                                            className='w-100'
                                                            onChange={(e) => changeInput(e)}
                                                        />
                                                    </InputGroup> : d.name
                                                }
                                            </td>
                                            <td>
                                                {
                                                    isEdit && editIndex == index ? <InputGroup className="mb-3 d-inline-block w-100">
                                                        <Form.Control
                                                            value={editInitial.email}
                                                            name='email'
                                                            className='w-100'
                                                            onChange={(e) => changeInput(e)}
                                                        />
                                                    </InputGroup> : d.email
                                                }
                                            </td>
                                            <td>
                                                {
                                                    isEdit && editIndex == index ? <InputGroup className="mb-3 d-inline-block w-100">
                                                        <Form.Control
                                                            value={editInitial.mobile}
                                                            name='mobile'
                                                            className='w-100'
                                                            onChange={(e) => changeInput(e)}
                                                        />
                                                    </InputGroup> : d.mobile
                                                }
                                            </td>
                                            <td>
                                                {
                                                    isEdit && editIndex == index ? <>
                                                        <Form.Check
                                                            inline
                                                            label="Male"
                                                            name="gender"
                                                            type="radio"
                                                            value="male"
                                                            onClick={changeInput}
                                                            checked={editInitial.gender === "male"}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Female"
                                                            name="gender"
                                                            type="radio"
                                                            value="female"
                                                            onClick={changeInput}
                                                            checked={editInitial.gender === "female"}
                                                        />
                                                    </> :
                                                        d.gender
                                                }
                                            </td>
                                            <td>
                                                {
                                                    isEdit && editIndex == index ? <Form.Control type="text" placeholder="Enter Address" name='address' value={editInitial.address} onChange={(e) => changeInput(e)} />
                                                        : d.address
                                                }
                                            </td>
                                            <td>
                                                {
                                                    isEdit && editIndex == index ? <Button variant="primary" onClick={() => { handleSave(index) }}>Save</Button> : <Button variant="primary" onClick={() => { handleEdit(index, d) }}>Edit</Button>
                                                }
                                                <span style={{ border: "1px solid black", marginLeft: "10px", marginRight: "10px" }}></span>
                                                <Button variant="danger" onClick={() => {
                                                    handleDelete(index)
                                                }}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default Empview