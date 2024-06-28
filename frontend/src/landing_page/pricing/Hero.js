import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="row border-bottom p-5 mt-5 text-center">
        <h1 className="text-muted">Pricing</h1>
        <h5 className="mt-5 text-muted">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h5>
      </div>
      <div className="row text-center mt-5 p-5">
        <div className="col-4 p-4">
          <img
            src="media/images/pricing-eq.svg"
            style={{ width: "70%" }}
            alt="pricing eq"
          />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/other-trades.svg" style={{ width: "70%" }} />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricing-eq.svg" style={{ width: "70%" }} />
          <h3>Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
