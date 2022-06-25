import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import EasyRegister_Logo from '../Assets/phone.png'
import StartYourCampaign_Logo from '../Assets/campaign.png'
import EpicStories_Logo from '../Assets/stories.png'
import './Feature.css'

function Feature() {
    return(
        <Container>
            <Row className="d-flex justify-content-around" style={{margin:"10.75rem 0"}}>
                <Col style={{maxWidth:"22rem", maxHeight:"23rem"}}>
                    <div className="d-flex justify-content-center" style={{height:"14rem"}}>
                        <Image src={EasyRegister_Logo}></Image>
                    </div>
                    <p className="feature-title">Easy Register</p>
                    <p className="feature-text">Registrasi akun dengan mudah dan tanpa ribet</p>
                </Col>
                <Col style={{maxWidth:"22rem", maxHeight:"23rem"}}>
                    <div className="d-flex justify-content-center" style={{height:"14rem"}}>
                        <Image src={StartYourCampaign_Logo}></Image>
                    </div>
                    <p className="feature-title">Start Your Campaign</p>
                    <p className="feature-text">Buat campaignmu terkait problem fasilitas pendidikan yang ada disekitarmu</p>
                </Col>
                <Col style={{maxWidth:"22rem", maxHeight:"23rem"}}>
                    <div className="d-flex justify-content-center" style={{height:"14rem"}}>
                        <Image src={EpicStories_Logo}></Image>
                    </div>
                    <p className="feature-title">Epic Stories</p>
                    <p className="feature-text">Temukan cerita sukses yang menginspirasi dari problem pendidikan di indonesia</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Feature