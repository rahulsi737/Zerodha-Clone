import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return (  
        <div className='container'>
            <div className='row text-center mt-5 p-3'>
                <h1 className='mb-3'>Technology</h1>
                <h5 className='mt-3 fs-4 text-muted'>Sleek, modern, and intuitive trading platforms</h5>
                <p className='mt-3 mb-5'>Check out our <Link style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p>
            </div>
        </div>
    );
}

export default Hero;