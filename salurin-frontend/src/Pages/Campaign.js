import CampaignDetail from "../Component/CampaignDetail";
import Navbar from "../Component/navbar";
import Footer from "../Component/Footer";

function Campaign()
{
    return(
        <>
            {/* Navbar component */}
            <Navbar />
            {/* Campaign Detail component */}
            <CampaignDetail />
            {/* Footer component */}
            <Footer />
        </>
    )
}

export default Campaign