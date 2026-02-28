import React from "react";
import "./index.css";
import ProtectArrow from "../../../../assets/images/protect-arrow.svg";
import ReportArrow from "../../../../assets/images/report-arrow.svg";
import SecureArrow from "../../../../assets/images/secure-arrow.svg";
import ProtectImg from "../../../../assets/images/protect-img.svg";
import ReportImg from "../../../../assets/images/report-img.svg";
import SecureImg from "../../../../assets/images/secura-img.svg";
import CheckMark from "../../../../assets/images/checkmark.svg";
import CheckMarkP from "../../../../assets/images/checkmark-purple.svg"
import CheckMarkG from "../../../../assets/images/checkmark-green.svg"

const index = () => {
  return (
    <>
      <section className="second-sec">
        <div className="container">
          <div className="second-sec-inner">
            <div className="second-sec-top d-flex flex-wrap justify-content-center text-center">
              <div className="second-sec-text-box text-center mb-2">
                <p className="second-sec-text text-gray">Features</p>
              </div>
              <h4 className="second-sec-title col-12">
                Why <span className="second-sec-t-span">choose</span> us
              </h4>
              <p className="second-sec-subtitle col-12 mb-5">
                We are the only service that provides all 3 services as <br /> a
                packaged service
              </p>
            </div>
            <div className="second-sec-bottom">
              {/* First */}

              <div className="card-feature d-flex align-items-center mb-5">
                <div className="card-feature-left d-flex gap-3">
                  <div>
                    <img src={ProtectArrow} alt="arrow" />
                  </div>
                  <div>
                    <h2 className="feature-title">
                      Protect Personal information
                    </h2>

                    <div className="d-flex align-items-start mb-4 mt-4">
                      <img src={CheckMark} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        The first step involves identifying all places where
                        your personal information might be present.
                      </p>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <img src={CheckMark} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        Once you've identified where your information is held,
                        the next step is to contact the administrators of this
                        platform
                      </p>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <img src={CheckMark} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        Removing personal information is not a one-time task but
                        requires ongoing vigilance.
                      </p>
                    </div>

                    <div className="d-flex align-items-start">
                      <img src={CheckMark} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        There are professional services and tools available that
                        specialise in personal information removal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-feature-right d-flex justify-content-center col-5">
                  <img className="img-fluid" src={ProtectImg} alt="" />
                </div>
              </div>

              {/* Second */}

              <div className="card-feature d-flex align-items-center mb-5">
                <div className="card-feature-left d-flex gap-3">
                  <div>
                    <img src={ReportArrow} alt="arrow" />
                  </div>
                  <div>
                    <h2 className="feature-title">
                      Detailed Reporting
                    </h2>

                    <div className="d-flex align-items-start mb-4 mt-4">
                      <img src={CheckMarkP} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        The first step involves identifying all places where
                        your personal information might be present.
                      </p>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <img src={CheckMarkP} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        Once you've identified where your information is held,
                        the next step is to contact the administrators of this
                        platform
                      </p>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <img src={CheckMarkP} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        Removing personal information is not a one-time task but
                        requires ongoing vigilance.
                      </p>
                    </div>

                    <div className="d-flex align-items-start">
                      <img src={CheckMarkP} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        There are professional services and tools available that
                        specialise in personal information removal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-feature-right d-flex justify-content-center col-5">
                  <img className="img-fluid" src={ReportImg} alt="report" />
                </div>
              </div>

              {/* Third */}

              <div className="card-feature d-flex align-items-center">
                <div className="card-feature-left d-flex gap-3">
                  <div>
                    <img src={SecureArrow} alt="arrow" />
                  </div>
                  <div>
                    <h2 className="feature-title">
                      Secure All Data
                    </h2>

                    <div className="d-flex align-items-start mb-4 mt-4">
                      <img src={CheckMarkG} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        The first step involves identifying all places where
                        your personal information might be present.
                      </p>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <img src={CheckMarkG} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        Once you've identified where your information is held,
                        the next step is to contact the administrators of this
                        platform
                      </p>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <img src={CheckMarkG} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        Removing personal information is not a one-time task but
                        requires ongoing vigilance.
                      </p>
                    </div>

                    <div className="d-flex align-items-start">
                      <img src={CheckMarkG} alt="checkmark" />
                      <p className="feature-text m-0 col-9 ms-2">
                        There are professional services and tools available that
                        specialise in personal information removal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-feature-right d-flex justify-content-center col-5">
                  <img className="img-fluid" src={SecureImg} alt="Secure" />
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
