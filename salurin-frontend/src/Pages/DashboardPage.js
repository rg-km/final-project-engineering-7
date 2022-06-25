import Navbar from "../Component/navbar";
import Footer from "../Component/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import StoriesCard from "../Component/StoriesCard";
import StoriesTable from "../Component/StoriesTable";
import CampaignTable from "../Component/CampaignTable";

function DashboardPage() {
    return (
        <>
            {/* Navbar component */}
            <Navbar />
            <Container>
                <StoriesTable />
                <CampaignTable/>
            </Container>
            <Footer />
        </>
    );
}

export default DashboardPage;
