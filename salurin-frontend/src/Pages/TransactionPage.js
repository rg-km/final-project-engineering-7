import Navbar from "../Component/navbar";
import Footer from "../Component/Footer";
import { Container } from "react-bootstrap";
import CampaignTable from "../Component/CampaignTable";
import { Link } from "react-router-dom";
import Transaction from "../Component/Transaction";

function TransactionPage() {
    return (
        <>
            {/* Navbar component */}
            <Navbar />
                <Transaction/>
            <Footer />
        </>
    );
}

export default TransactionPage;
