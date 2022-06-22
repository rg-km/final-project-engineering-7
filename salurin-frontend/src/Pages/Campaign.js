import CampaignDetail from "../Component/CampaignDetail";
import Navbar from "../Component/navbar";
import Footer from "../Component/Footer";
import CreateCampaign from "./CreateCampaign";

function Campaign()
{
    return(
        <>
            {/* Navbar component */}
            <Navbar />
            {/* Campaign Detail component */}
            <CampaignDetail />
            {/* Create Campaign component */}
            <CreateCampaign />
            {/* Footer component */}
            <Footer />
        </>
    )
}

export default Campaign