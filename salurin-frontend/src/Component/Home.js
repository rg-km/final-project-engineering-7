import React from 'react';

// import component Jumbotron
import Jumbotron from './Jumbotron';
// import component Feature
import Feature from './Feature';
//  import component campaign
import Campaign from './Campaign';
// import compnent Stories
import Stories from './Stories';

function Home()
{
    return(
        <>
            {/* Jumbotron component */}
            <Jumbotron />
            {/* Feature component */}
            <Feature />
            {/* Campaign component */}
            <Campaign />
            {/* Stories component */}
            <Stories />
        </>
    )
}

export default Home