import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ExampleImage from '../Assets/example-img.svg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CampaginCard from './CampaignCard';

function Campaign()
{
    return(
        <Container>
            <Row className='my-3'>
                <Col>
                    <h2 className='display-1 fw-bold tittle my-2 text-start'>Campaign Terkini</h2>
                    <p className='fs-5 text-start text-dark'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Col>
                <Col className='d-flex align-items-center justify-content-end'>
                    <a href="https://example.com" className='text-end my-2'>lainnya</a>
                </Col>
            </Row>
            <Row className='my-3 mb-5'>
                <CampaginCard />
                <CampaginCard />
                <CampaginCard />
            </Row>
        </Container>
    )
}

export default Campaign