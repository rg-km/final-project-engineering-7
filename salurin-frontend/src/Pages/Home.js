import React from 'react';

// import component Jumbotron
import Jumbotron from '../Component/Jumbotron';
// import component Feature
import Feature from '../Component/Feature';
//  import component campaign
import Campaign from '../Component/Campaign';
// import compnent Stories
import Stories from '../Component/Stories';
// import navbar component
import Navbar from '../Component/navbar';
// import component footer
import Footer from '../Component/Footer';

function Home()
{
    return(
        <>
            {/* Navbar component */}
            <Navbar />
            {/* Jumbotron component */}
            <Jumbotron />
            {/* Feature component */}
            <Feature />
            {/* Campaign component */}
            <Campaign />
            {/* Stories component */}
            <Stories />
            {/* Footer component */}
            <Footer />
        </>
    )
}

export default Home