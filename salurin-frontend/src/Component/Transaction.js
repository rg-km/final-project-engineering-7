import './Footer.css';
import Youtube_Logo from '../Assets/Youtube-Logo.png';
import LinkedIn_Logo from '../Assets/LinkedIn-Logo.png';
import Instagram_Logo from '../Assets/Instagram-Logo.png';
import Salurin_White from '../Assets/Logo-Salurin-White.png';
import { Container, Card, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import Lottie from "lottie-web";
import { useEffect, useState } from "react";
import axios from "axios";
import jumbotronLottie from "../Assets/hero-lottie.json";

function Transaction() {
    useEffect(() => {
        const instance = Lottie.loadAnimation({
            container: document.querySelector("#jumbotron-lottie"),
            animationData: jumbotronLottie,
            loop: true,
        });
        return () => instance.destroy();
    }, []);

    const [amount, setAmount] = useState();
    const [validation, setValidation] = useState([]);
    let token = localStorage.getItem('token');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log('Bearer ' + token.split('"')[1]);

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.split('"')[1]}`
        }
    }

    const transactionHandler = async (e) => {
        e.preventDefault()

        await axios.post('https://salurin-backend.herokuapp.com/api/transaction',
            JSON.stringify({
                campaign_id: '1',
                amount: amount
            }), config
        )
            .then((response) => {

                //set token on localStorage
                localStorage.setItem('token', JSON.stringify(response.data.data.token));
                localStorage.setItem('user', JSON.stringify(response.data.data.name));
                localStorage.setItem('id', JSON.stringify(response.data.data.id));
            })
            .catch((error) => {

                //assign error to state "validation"
                setValidation(error.response.data);
                setShow(true);
            })
    }
    return (
        <Container className="mt-5 mb-5 justify-content-center">
            <Row>
                <Col lg={6}>
                    <div className="d-none d-md-block img-responsive" id="jumbotron-lottie" />
                </Col>
                <Col lg={6}>
                    <Card className='p-5'>
                        <h1 className='text-center mb-5' >Transaction</h1>
                        <Form className='mx-2' noValidate onSubmit={transactionHandler}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Masukan Dana</Form.Label>
                                <Form.Control type="number" value={amount} placeholder="Contoh : Rp. 50.000" onChange={(e) => setAmount(e.target.value)} />
                            </Form.Group>
                            <Button variant="light" size="lg" type="submit" className='text-white w-100' style={{
                                backgroundColor: "#FF852C",
                                width: "100%",
                                height: "4rem",
                                fontSize: "1.375rem",
                                borderRadius: "1.25rem",
                            }}>
                                Bayar dengan midtrans
                            </Button>
                            <Modal show={show}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Yakin ingin Salurin Dana ? </Modal.Title>
                                </Modal.Header>
                                <Modal.Body >
                                    Total Dana : {amount}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="light" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <a href='https://app.sandbox.midtrans.com/snap/v3/redirection/21018745-aa0b-4996-8095-944eafc8cffe' target='_self' className='btn btn-success'>Bayar</a>
                                </Modal.Footer>
                            </Modal>
                        </Form>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}
export default Transaction;