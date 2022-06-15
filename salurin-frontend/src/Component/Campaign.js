import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ExampleImage from '../Assets/example-img.svg';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Campaign()
{
    return(
        <Container>
            <Row className='my-3'>
                <Col><h2 className='fw-bold tittle my-2 text-start'>Campaign Terkini</h2></Col>
                <Col className='d-flex align-items-center justify-content-end'>
                    <a href="https://example.com" className='text-end my-2'>lainnya</a>
                </Col>
            </Row>
            <Row className='my-3 mb-5'>
                <Col className='lg-3'>
                    <Card className='w-100'>
                        <Card.Img variant="top" src={ExampleImage} />
                        <Card.Body>
                            <Card.Title className='d-flex text-left'>Card Title</Card.Title>
                            <Card.Text className='d-flex text-start text-muted'>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <hr></hr>
                            <div className='amount fw-bold d-flex text-start my-3'>Rp. 15.000.000,00</div>
                            <ProgressBar animated now={20} />
                            <Card.Text><small className='d-flex text-start text-muted my-2'>Berakhir pada <span className='due-date'>27 Oct 2022</span></small></Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='lg-3'>
                    <Card className='w-100'>
                        <Card.Img variant="top" src={ExampleImage} />
                        <Card.Body>
                            <Card.Title className='d-flex text-left'>Card Title</Card.Title>
                            <Card.Text className='d-flex text-start text-muted'>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <hr></hr>
                            <div className='amount fw-bold d-flex text-start my-3'>Rp. 50.000.000,00</div>
                            <ProgressBar animated now={70} />
                            <Card.Text><small className='d-flex text-start text-muted my-2'>Berakhir pada <span className='due-date'>27 Oct 2022</span></small></Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='lg-3'>
                    <Card className='w-100'>
                        <Card.Img variant="top" src={ExampleImage} />
                        <Card.Body>
                            <Card.Title className='d-flex text-left'>Card Title</Card.Title>
                            <Card.Text className='d-flex text-start text-muted'>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <hr></hr>
                            <div className='amount fw-bold d-flex text-start my-3'>Rp. 30.000.000,00</div>
                            <ProgressBar animated now={45} />
                            <Card.Text><small className='d-flex text-start text-muted my-2'>Berakhir pada <span className='due-date'>27 Oct 2022</span></small></Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Campaign