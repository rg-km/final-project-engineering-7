import React from "react";
import { useState } from "react";
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

function RegisterForm()
{
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    // validate form
    const [validated, setValidated] = useState(false)

    let handleSubmit = async (e) => {
        e.preventDefault()

        // const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }

        // setValidated(true);
        
        try {
            let res = await fetch("https://salurin-backend.herokuapp.com/api/register", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password : password
                })
            })

            let resJson = await res.json();
            
            if(res.status === 200)
            {
                setName("")
                setEmail("")
                setPassword("")
                setMessage("Your user has been created")
            }
            else
            {
                setMessage("Some error occured")
            }
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <div className="w-100 d-flex align-items-center justify-content-center wrapper">
            <Card style={{ width: '26rem' }} className='p-4'>
                <Link to='/'>
                    <img src={Logo} width={140} className='my-4' alt="salurin" />
                </Link>
                <Card.Text className='fw-bold mx-2'>Sign up now!</Card.Text>

                {/* Forms */}
                <Form className='mx-2' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="" required />
                    </Form.Group>
                    <Button variant="success" size="lg" type="submit" className='text-white w-100'>
                        Sign up
                    </Button>
                    <div className="w-100 my-2 mx-auto d-flex align-items-center justify-content-center message">
                        { message ? <p className="text-center"> {message} </p> : null }
                    </div>
                    <Link to='/login' className="text-muted my-3 mx-auto link w-100 d-flex justify-content-center">Already have account ? login</Link>
                </Form>
            </Card>
        </div>
    )
}

export default RegisterForm;