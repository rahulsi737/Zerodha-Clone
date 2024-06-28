import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mb-5 mt-5">
        <h4>
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </h4>

        <h1 className="p-3 mt-5">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcase-logo.png"
            style={{ width: "50%" }}
            alt="smallcase"/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streak-logo.png"
            style={{ width: "50%" }}
            alt="streak"
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibull.svg"
            style={{ width: "50%" }}
            alt="streak"
          />
          <p className="text-small text-muted">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhafundhouse.png"
            style={{ width: "50%" }}
            alt="smallcase"/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/tijori.svg"
            style={{ width: "50%" }}
            alt="tijori"
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/ditto-logo.png"
            style={{ width: "50%" }}
            alt="streak"
          />
          <p className="text-small text-muted">Options trading platform</p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Universe;
