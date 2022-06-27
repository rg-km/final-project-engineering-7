import './Footer.css';
import Youtube_Logo from '../Assets/Youtube-Logo.png';
import LinkedIn_Logo from '../Assets/LinkedIn-Logo.png';
import Instagram_Logo from '../Assets/Instagram-Logo.png';
import Salurin_White from '../Assets/Logo-Salurin-White.png';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import Lottie from "lottie-web";
import {useEffect, useState} from "react";
import axios from "axios";
import jumbotronLottie from "../Assets/hero-lottie.json";

function Transaction(){
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
      let token = localStorage.getItem('token')
      console.log(token.split('"')[1]);

      const transactionHandler = async (e) => {
        e.preventDefault()

        await axios.post('https://salurin-backend.herokuapp.com/api/transaction',
            JSON.stringify({
                campaign_id: '1',
                amount: amount
        }),
        {
            headers: {
              "Content-Type": 'application/json',
              "Authorization": token.split('"')[1],
            },
          }
        )
        .then((response) => {
            localStorage.setItem('payment_url', JSON.stringify(response.data.data.amount_url));
            console.log(response.data.data.amount_url);
        })
        .catch((error) => {

            //assign error to state "validation"
            setValidation(error.response.data);
        })
    }
    return(
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
                            <Form.Control type="email" placeholder="Contoh : Rp. 50.000" />
                        </Form.Group>

                        <Button size="lg" type="submit" style={{
                            backgroundColor: "#FF852C",
                            width: "100%",
                            borderRadius: "1.25rem",
                        }}>
                            Bayar dengan Midtrans
                        </Button>
                    </Form>
                </Card>
            </Col>
           
         </Row>
         </Container>
    )
}
export default Transaction;