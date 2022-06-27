import React, { useState,useEffect } from "react";
import { Link, Navigate } from 'react-router-dom';

// import axios
import axios from 'axios';

// import bootstrap component
import { Card, Form, Button, Modal} from 'react-bootstrap';


// Import logo
import Logo from "../../logo.png";

// import css
import './auth.css';

function LoginForm()
{
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [show, setShow] = useState(false);
    const [validation, setValidation] = useState([]);


    //hook useEffect
    useEffect(() => {

        //check token
        if(localStorage.getItem('token')) {

            //redirect page dashboard 
            window.location.href = '/'
        }
    }, []);

    const loginHandler = async (e) => {
        e.preventDefault()

        await axios.post('https://salurin-backend.herokuapp.com/api/login',
            JSON.stringify({
            email: email,
            password : password
        }))
        .then((response) => {
            
            //set token on localStorage
            localStorage.setItem('token', JSON.stringify(response.data.data.token));
            localStorage.setItem('user', JSON.stringify(response.data.data.name));
            localStorage.setItem('id', JSON.stringify(response.data.data.id));
            setShow(true);
            
        })
        .catch((error) => {

            //assign error to state "validation"
            setValidation(error.response.data);
        })
    }

    return(
        <div className="w-100 d-flex align-items-center justify-content-center wrapper">
            <Card style={{ width: '26rem' }} className='p-4'>
                <Link to='/'>
                    <img src={Logo} width={140} className='my-4' alt='logo-salurin'/>
                </Link>
                <Card.Text className='fw-bold mx-2'>Login</Card.Text>

                {/* Forms */}
                <Form className='mx-2' noValidate onSubmit={loginHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="success" size="lg" type="submit" oclassName='text-white w-100'>
                        Sign in
                    </Button>
                        <Modal show={show}>
                        <Modal.Header closeButton>
                        <Modal.Title>Login Successfull</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                        <Link to='/' className='btn btn-success'>OK</Link>
                        </Modal.Footer>
                        </Modal>
                    <Link to='/register' className="text-muted my-3 mx-auto link w-100 d-block">Don't have account ? sign up</Link>
                </Form>
            </Card>
        </div>
    )
}

export default LoginForm;