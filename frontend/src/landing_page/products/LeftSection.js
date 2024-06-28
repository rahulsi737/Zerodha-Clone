import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-bottom mb-5">
        <div className="row">
            <div className="col-6 ">
                <img src={imageURL} className="p-5" />
            </div>
            <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                </div>
                <div className="mt-3">
                    <a href={googlePlay}><img src="media/images/google-play-badge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstore-badge.svg"/></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
