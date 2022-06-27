import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

// import bootstrap component
import { Modal } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import axios from "axios";

// Import logo
import Logo from "../../logo.png";

// import css
import './auth.css';

function RegisterForm()
{
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(undefined);

    // validate form
    const [validated, setValidated] = useState([])

    let registerHandler = async (e) => {
        e.preventDefault()

        // send data to server
        await axios.post('https://salurin-backend.herokuapp.com/api/register', 
            JSON.stringify({
                name: name,
                email: email,
                password : password
            })
            )
            .then(() => {
                setShow(true);
            })
            .catch((e) => {
                setValidated(e.response.data)
            })
    }

    return(
        <div className="w-100 d-flex align-items-center justify-content-center wrapper">
            <Card style={{ width: '26rem' }} className='p-4'>
                <Link to='/'>
                    <img src={Logo} width={140} className='my-4' alt="salurin" />
                </Link>
                <Card.Text className='fw-bold mx-2'>Sign up now!</Card.Text>

                {/* Forms */}
                <Form className='mx-2' onSubmit={registerHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} placeholder="" onChange={(e) => setName(e.target.value)} required />
                        {validated.name && (<div className="alert alert-danger">
                            {validated.name[0]}
                        </div>)}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        {validated.email && (<div className="alert alert-danger">
                            {validated.email[0]}
                        </div>)}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} placeholder="" onChange={(e) => setPassword(e.target.value)} required />
                        {validated.password && (<div className="alert alert-danger">
                            {validated.password[0]}
                        </div>)}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" placeholder="" required />
                    </Form.Group>
                    <Button variant="success" size="lg" type="submit" onClick={handleShow} className='text-white w-100'>
                        Sign up
                    </Button>
                        <Modal show={show}>
                        <Modal.Header closeButton>
                        <Modal.Title>Register Successfull</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Link to='/login' className='btn btn-success'>OK</Link>
                        </Modal.Footer>
                        </Modal>
                    <div className="w-100 my-2 mx-auto d-flex align-items-center justify-content-center message">
                    </div>
                    <Link to='/login' className="text-muted my-3 mx-auto link w-100 d-flex justify-content-center">Already have account ? login</Link>
                </Form>
            </Card>
        </div>
    )
}

export default RegisterForm;