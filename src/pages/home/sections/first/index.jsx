import React from "react";
import "./index.css";
import fIcon from "../../../../assets/images/f-card-icon.svg";
import sIcon from "../../../../assets/images/s-card-icon.svg";
import tIcon from "../../../../assets/images/t-card-icon.svg";
import cardArrow from "../../../../assets/images/card-arrow.svg";
// import cardBg from "../../../../assets/images/f-card-bg.svg";

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
                Make your data invisible by generating unlimited identities. The{" "}
                <br />
                next-level in privacy protection for online and travel.
              </p>
            </div>
            {/* Bottom */}
            <div className="first-sec-bottom d-flex align-items-center justify-content-between mt-3">
              <div className="first-sec-card p-4">
                <div className="card-img-box col-12 ">
                  <img src={fIcon} alt="icon" />
                </div>
                <p className="f-card-subtitle mt-3 col-10">
                  Personal Information removal
                </p>
                <p className="f-card-text text-gray mb-4">
                  Lets users quickly find answers to their questions without
                  having to search through multiple sources.
                </p>
                <div className="f-card-b-box d-flex align-items-center">
                  <p className="f-card-b-text m-0">Explore More</p>
                  <img src={cardArrow} alt="arrow" />
                </div>
              </div>

              <div className="first-sec-card p-4">
                <div className="card-img-box col-12 ">
                  <img src={sIcon} alt="icon" />
                </div>
                <p className="f-card-subtitle mt-3 col-9">
                  Cloaking Alias Profiles
                </p>
                <p className="f-card-text text-gray mb-4">
                  Lets users quickly find answers to their questions without
                  having to search through multiple sources.
                </p>
                <div className="f-card-b-box d-flex align-items-center">
                  <p className="f-card-b-text m-0">Explore More</p>
                  <img src={cardArrow} alt="arrow" />
                </div>
              </div>

              <div className="first-sec-card p-4">
                <div className="card-img-box col-12 ">
                  <img src={tIcon} alt="icon" />
                </div>
                <p className="f-card-subtitle col-10 mt-3 ">
                  Virtual identities Security
                </p>
                <p className="f-card-text text-gray mb-4">
                  Lets users quickly find answers to their questions without
                  having to search through multiple sources.
                </p>
                <div className="f-card-b-box d-flex align-items-center">
                  <p className="f-card-b-text m-0">Explore More</p>
                  <img src={cardArrow} alt="arrow" />
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
