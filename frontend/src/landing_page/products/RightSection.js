import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
  }) {
    return (  
        <div className="container border-bottom mb-5">
        <div className="row">
        <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                </div>
            </div>
            <div className="col-6 ">
                <img src={imageURL} className="p-5" />
            </div>
            
        </div>
    </div>
    );
}

export default RightSection;