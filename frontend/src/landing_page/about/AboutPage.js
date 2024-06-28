import React from 'react';

import Hero from '../about/Hero';
import Team from '../about/Team';
import People from './People';

function AboutPage() {
    return (  
        <>
            <Hero />
            <People/>
            <Team />  
        </>
    );
}

export default AboutPage;