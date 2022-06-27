import Navbar from "../Component/navbar";
import Footer from "../Component/Footer";
import { Container } from "react-bootstrap";
import CampaignTable from "../Component/CampaignTable";
import { Link } from "react-router-dom";

function MyCampaignPage() {
    return (
        <>
            {/* Navbar component */}
            <Navbar />
            <Container>
                <h1 className='mt-5 text-center'>My Campaign</h1>
                <CampaignTable/>
            </Container>
            <Footer />
        </>
    );
}

export default MyCampaignPage;
