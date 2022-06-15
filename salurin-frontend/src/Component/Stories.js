import './Stories.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ExampleImage from '../Assets/example-img.svg';
import Image from 'react-bootstrap/Image'
import Avatar from '../Assets/avatar-sully.png';

function Stories()
{
    return(
        <div>
            <h2 className='display-1 fw-bold tittle my-2 mb-5 text-start'><Container>Stories</Container></h2>

            <div className='d-flex stories-wrapper my-2 mb-5 w-100'>
                <div className='slider'>
                    <Card border='light' style={{ width:'24rem' }} className='p-4 stories-card shadow-sm'>
                        <Card.Text className='text-dark text-start'>"Objectively drive extensible products before ethical convergence. Distinctively."</Card.Text>
                        <div className='stories-profile d-flex'>
                            <Image src={Avatar} className="rounded-circle mr-2" width={50} height={50}></Image>
                            <span className='fw-bold mx-3 d-flex align-items-center'>Jake Sully</span>
                        </div>
                    </Card>
                    
                    <Card border='light' style={{ width:'24rem' }} className='p-4 stories-card shadow-sm'>
                        <Card.Text className='text-dark text-start'>"Seamlessly recaptiualize open-source interfaces rather than client-centered technology. Phosfluorescently e-enable long-term high-impact testing procedures vis-a-vis."</Card.Text>
                        <div className='stories-profile d-flex'>
                            <Image src={Avatar} className="rounded-circle mr-2" width={50} height={50}></Image>
                            <span className='fw-bold mx-3 d-flex align-items-center'>Jake Sully</span>
                        </div>
                    </Card>

                    <Card border='light' style={{ width:'24rem' }} className='p-4 stories-card shadow-sm'>
                        <Card.Text className='text-dark text-start'>"Synergistically target out-of-the-box mindshare rather than superior e-markets. Dynamically parallel."</Card.Text>
                        <div className='stories-profile d-flex'>
                            <Image src={Avatar} className="rounded-circle mr-2" width={50} height={50}></Image>
                            <span className='fw-bold mx-3 d-flex align-items-center'>Jake Sully</span>
                        </div>
                    </Card>

                    <Card border='light' style={{ width:'24rem' }} className='p-4 stories-card shadow-sm'>
                        <Card.Text className='text-dark text-start'>"Objectively drive extensible products before ethical convergence. Distinctively."</Card.Text>
                        <div className='stories-profile d-flex'>
                            <Image src={Avatar} className="rounded-circle mr-2" width={50} height={50}></Image>
                            <span className='fw-bold mx-3 d-flex align-items-center'>Jake Sully</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Stories;