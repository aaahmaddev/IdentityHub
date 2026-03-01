import React from "react";
import "./index.css";
import CheckMarkP from "../../../../assets/images/checkmark-purple.svg";

const index = () => {
  return (
    <>
      <section className="third-sec">
        <div className="container">
          <div className="third-sec-inner">
            <div className="third-sec-top d-flex flex-wrap text-center justify-content-center">
              <div className="third-sec-text-box text-center mb-2">
                <p className="third-sec-text text-gray">Pricing</p>
              </div>
              <h4 className="third-sec-title col-12">
                Our <span className="third-sec-t-span">Pricing</span> Package
              </h4>
            </div>
            {/* Bottom */}
            <div className="third-sec-bottom d-flex align-items-center justify-content-between mt-4">
              {/* First */}
              <div className="card-pricing p-4">
                <h2 className="card-pricing-title">Basic</h2>
                <p className="card-pricing-text">
                  AI chatbot, personalized recommendations
                </p>
                <p className="card-pricing-value m-0 d-flex align-items-center">
                  <span className="card-pricing-span">$</span>0
                </p>
                <button className="card-pricing-btn mt-2">Get Started</button>

                <div className="card-pricing-mb d-flex align-items-center pb-3 pt-3 mt-4">
                  <img className="img-fluid" src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">Type of threat</p>
                </div>

                <div className="card-pricing-mb d-flex align-items-center pb-3 pt-3">
                  <img className="img-fluid" src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">Online presence</p>
                </div>

                <div className="card-pricing-mb d-flex align-items-center pb-3 pt-3">
                  <img className="img-fluid" src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">
                    Access to all modules
                  </p>
                </div>

                <div className="card-pricing-mbs d-flexb align-items-center d-flex pb-3 pt-3">
                  <img src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">Notability</p>
                </div>
              </div>
              {/* Second */}

              <div className="card-pricing-s p-4 pt-5">
                <h2 className="card-pricing-title">Premium</h2>
                <p className="card-pricing-text">
                  Advanced AI chatbot, priority support, analytics dashboard
                </p>
                <p className="card-pricing-value m-0 d-flex align-items-center">
                  <span className="card-pricing-span">$</span>9.99
                </p>
                <button className="card-pricing-sbtn mt-2">Get Started</button>

                <div className="card-pricing-mb d-flex align-items-center pb-3 pt-3 mt-4">
                  <img className="img-fluid" src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">Type of threat</p>
                </div>

                <div className="card-pricing-mb d-flex align-items-center pb-3 pt-3">
                  <img className="img-fluid" src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">Online presence</p>
                </div>

                <div className="card-pricing-mb d-flex align-items-center pb-3 pt-3">
                  <img className="img-fluid" src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">
                    Access to all modules
                  </p>
                </div>

                <div className="card-pricing-mb d-flexb align-items-center d-flex pb-3 pt-3">
                  <img src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">Notability</p>
                </div>

                <div className="card-pricing-mbs d-flexb align-items-center d-flex pb-3 pt-3">
                  <img src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">
                    Optimize existing websites
                  </p>
                </div>
              </div>
              {/* Third */}

              <div className="card-pricing p-4">
                <h2 className="card-pricing-title">Enterprise</h2>
                <p className="card-pricing-text">
                  AI chatbot, personalized recommendations
                </p>
                <p className="card-pricing-value m-0 d-flex align-items-center">
                  <span className="card-pricing-span">$</span>20.99
                </p>
                <button className="card-pricing-btn mt-2">Get Started</button>

                <div className="card-pricing-mb d-flex align-items-center pb-3 pt-3 mt-4">
                  <img className="img-fluid" src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">Type of threat</p>
                </div>

                <div className="card-pricing-mb d-flex align-items-center pb-3 pt-3">
                  <img className="img-fluid" src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">Online presence</p>
                </div>

                <div className="card-pricing-mb d-flex align-items-center pb-3 pt-3">
                  <img className="img-fluid" src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">
                    Access to all modules
                  </p>
                </div>

                <div className="card-pricing-mbs d-flexb align-items-center d-flex pb-3 pt-3">
                  <img src={CheckMarkP} alt="checkmark" />
                  <p className="card-pricing-mbt m-0 ms-3">Notability</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
