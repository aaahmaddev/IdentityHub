import React from "react";
import "./index.css";

const index = () => {
  return (
    <>
      <section className="first-sec">
        <div className="container">
          <div className="first-sec-inner">
            <div className="first-sec-top d-flex flex-wrap justify-content-center">
              <div className="first-sec-text-box text-center">
                <p className="first-sec-text text-gray m-0">Services</p>
              </div>
              <p className="first-sec-top-subtitle text-gray col-12 text-center">
                See our services for secure <br /> your{" "}
                <span className="first-sec-subtitle-span">Data</span>
              </p>
              <p className="first-sec-top-text text-gray col-12 text-center">
                Make your data invisible by generating unlimited identities. The <br />
                next-level in privacy protection for online and travel.
              </p>
            </div>

            <div className="first-sec-bottom">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
