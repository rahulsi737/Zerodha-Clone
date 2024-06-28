import React from 'react';
import { Link } from "react-router-dom";


function People() {
    return (  
      <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="fs-2 text-center ">People</h1>
      </div>
      <div className="row text-muted" 
        style={{lineHeight:"1.8", fontSize:"1.2em"}}
      >
        <div className="col-6 p-5 text-center">
            <img src='media/images/nithinkamath.jpg' style={{borderRadius:"100%", width:"50%"}} />
            <h4 className='mt-5'>Nithin Kamath</h4>
            <h6 className='mt-3'>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
            <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p>
                Playing basketball is his zen.
            </p>
            <p>
            Connect on <a href='https://nithinkamath.me/' style={{textDecoration:"none"}}>Homepage</a> / <a href='https://tradingqna.com/u/nithin/summary'style={{textDecoration:"none"}} >TradingQnA</a> / <a href='https://x.com/Nithin0dha'style={{textDecoration:"none"}}>Twitter</a>
            </p>
        </div>
        
      </div>
    </div>
    );
}

export default People;
