import React from 'react';

function Team() {
    return (  
        <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="fs-2 text-center ">People</h1>
      </div>
      <div className="row text-muted" 
        style={{lineHeight:"1.8", fontSize:"1.2em"}}>
        <div className="col-4 p-5 text-center">
            <img src='media/images/Nikhil.jpg' style={{borderRadius:"100%", width:"60%"}} />
            <h4 className='mt-5'>Nikhil Kamath</h4>
            <h6 className='mt-3'>Co-founder & CFO</h6>
            <a href='#'style={{textDecoration:"none"}}>Bio</a>
        </div>
        <div className="col-4 p-5 text-center">
        <img src='media/images/Kailash.jpg' style={{borderRadius:"100%", width:"60%"}} />
            <h4 className='mt-5'>Dr. Kailash Nadh</h4>
            <h6 className='mt-3'>CTO</h6>
            <a href='#'style={{textDecoration:"none"}}>Bio</a>
        </div>
        <div className="col-4 p-5 text-center">
        <img src='media/images/Venu.jpg' style={{borderRadius:"100%", width:"60%"}} />
            <h4 className='mt-5'>Venu Madhav</h4>
            <h6 className='mt-3'>COO</h6>
            <a href='#'style={{textDecoration:"none"}}>Bio</a>
        </div>
      </div>
      <div className="row text-muted" 
        style={{lineHeight:"1.8", fontSize:"1.2em"}}>
        <div className="col-4 p-5 text-center">
            <img src='media/images/Hanan.jpg' style={{borderRadius:"100%", width:"60%"}} />
            <h4 className='mt-5'>Hanan Delvi</h4>
            <h6 className='mt-3'>CCO</h6>
            <a href='#'style={{textDecoration:"none"}}>Bio</a>
        </div>
        <div className="col-4 p-5 text-center">
        <img src='media/images/Seema.jpg' style={{borderRadius:"100%", width:"60%"}} />
            <h4 className='mt-5'>Seema Patil</h4>
            <h6 className='mt-3'>Director</h6>
            <a href='#'style={{textDecoration:"none"}}>Bio</a>
        </div>
        <div className="col-4 p-5 text-center">
        <img src='media/images/karthik.jpg' style={{borderRadius:"100%", width:"60%"}} />
            <h4 className='mt-5'>Karthik Rangappa</h4>
            <h6 className='mt-3'>Chief of Education</h6>
            <a href='#'style={{textDecoration:"none"}}>Bio</a>
        </div>
      </div>
      <div className="row text-muted" 
        style={{lineHeight:"1.8", fontSize:"1.2em"}}>
        <div className="col-4 p-5 text-center">
            <img src='media/images/Austin.jpg' style={{borderRadius:"100%", width:"60%"}} />
            <h4 className='mt-5'>Austin Prakash</h4>
            <h6 className='mt-3'>Director Strategy</h6>
            <a href='#'style={{textDecoration:"none"}}>Bio</a>
        </div>
        <div className="col-4 p-5 text-center">
        
        </div>
        <div className="col-4 p-5 text-center">
        
        </div>
      </div>
    </div>
    );
}

export default Team;
