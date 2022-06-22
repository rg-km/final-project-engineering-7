import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CampaginCard from './CampaignCard';

function Campaign()
{
    return(
        <Container>
            <Row className='my-3'>
                <Col>
                    <h2 className='display-1 my-2 text-start' style={{fontSize: '3rem', fontWeight: '500'}}>Campaign Terkini</h2>
                </Col>
                <Col className='d-flex align-items-center justify-content-end'>
                    <a href="https://example.com" className='text-end my-2 text-decoration-none' style={{color: '#599042'}}>Lainnya</a>
                </Col>
            </Row>
            <div className='my-3 mb-5 d-flex justify-content-between'>
                <CampaginCard />
                <CampaginCard />
                <CampaginCard />
            </div>
        </Container>
    )
}

export default Campaign