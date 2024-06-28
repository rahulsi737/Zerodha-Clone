import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4 className="">Support Portel</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 mx-5 my-5">
        <div className="col p-5 ">
            <h5 className="mb-5"> Search for an answer or browse help topics to create a ticket</h5>
            <input placeholder="Eg: How do i activate F&0, why is my order getting rejected..." />
            
            <a href="" className="mx-2">Track account opening</a>
            <a href="" className="mx-2">Track segment activation</a>
            <a href="" className="mx-2">Intraday margins</a><br/>
            <a href="" className="mx-2">Kite user manual</a>
        </div>
        <div className="col p-5 ">
            <h5>Featured</h5>
            <ol>
                <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
                <li><a href="">Surveillance measure on scrips - June 2024</a></li>
            </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
