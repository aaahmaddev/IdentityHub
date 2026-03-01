import React from "react";
import './index.css'
const index = () => {
  return (
    <>
      <section className="fourth-sec">
        <div className="container">
          <div className="fourth-sec-inner">
            {/* Top */}
            <div className="fourth-sec-top d-flex flex-wrap justify-content-center text-center">
              <div className="fourth-sec-text-box text-center mb-2">
                <p className="fourth-sec-text text-gray">Testimonials</p>
              </div>
              <h4 className="fourth-sec-title col-12">
                What's our user  <span className="fourth-sec-t-span">says</span> <br /> about us
              </h4>
            </div>
            {/* Bottom */}
            <div className="fourth-sec-bottom"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
