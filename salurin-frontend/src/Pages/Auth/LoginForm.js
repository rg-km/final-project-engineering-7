import React from "react";
import { Link } from 'react-router-dom';

// import bootstrap component
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

// Import logo
import Logo from "../../logo.png";

// import css
import './auth.css';

function LoginForm()
{
    return(
        <div className="w-100 d-flex align-items-center justify-content-center wrapper">
            <Card style={{ width: '26rem' }} className='p-4'>
                <Link to='/'>
                    <img src={Logo} width={140} className='my-4'></img>
                </Link>
                <Card.Text className='fw-bold mx-2'>Login</Card.Text>

                {/* Forms */}
                <Form className='mx-2'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="success" size="lg" type="submit" className='text-white w-100'>
                        Sign in
                    </Button>
                    <Link to='/register' className="text-muted my-3 mx-auto link w-100 d-block">Don't have account ? sign up</Link>
                </Form>
            </Card>
        </div>
    )
}

export default LoginForm;