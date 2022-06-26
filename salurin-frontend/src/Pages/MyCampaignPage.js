import Navbar from "../Component/navbar";
import Footer from "../Component/Footer";
import { Container } from "react-bootstrap";
import CampaignTable from "../Component/CampaignTable";

function MyCampaignPage() {
    return (
        <Container>
            {/* Navbar component */}
            <Navbar />
            <Container>
                <h1 className='mt-5 text-center'>My Campaign</h1>
                <CampaignTable/>
            </Container>
            <Footer />
        </Container>
    );
}

export default MyCampaignPage;
