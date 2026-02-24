import React from "react";
import "./index.css";
import HeroImg from "../../../../assets/images/hero-img.png";
import CheckIcon from "../../../../assets/images/check-icon.svg";
import PhoneIcon from "../../../../assets/images/phone-icon.svg";
import CardIcon from "../../../../assets/images/card-icon.svg";
import GmailIcon from "../../../../assets/images/gmail-icon.svg";

const index = () => {
  return (
    <>
      <div className="hero ">
        <div className="container">
          <div className="hero-inner d-flex flex-wrap justify-content-center">
            <div className="hero-top d-flex flex-wrap justify-content-center">
              <div className="">
                <div className="hero-top-box text-center">
                  <p className="text-gray"> Secure your data</p>
                </div>
              </div>
              <div className="text-center col-12">
                <h1 className="hero-title ">
                  Identity-hub is a better way <br />
                  <span className="hero-title-span">to achieve privacy</span>
                </h1>
                <p className="hero-text">
                  Make your data invisible by generating unlimited identities.
                  The next-level in <br /> privacy protection for online and
                  travel.
                </p>
              </div>
              <div className="hero-btns-box">
                <button className="hero-btn-1 me-2">Start free trail</button>
                <button className="hero-btn-2">Use it Now</button>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="hero-bottom-t d-flex align-items-center">
                <div className="hero-bottom-card d-flex align-items-center justify-content-center gap-3">
                  <img src={CheckIcon} alt="" />
                  <div>
                    <p className="hero-bottom-card-subtitle m-0">One-time passcode</p>
                    <p className="hero-bottom-card-text m-0">Kas3345-r32</p>
                  </div>
                </div>

                <div className="hero-bottom-card-two d-flex align-items-center justify-content-center gap-3">
                  <img src={PhoneIcon} alt="" />
                  <div>
                    <p className="hero-bottom-card-subtitle m-0">Phone numbers</p>
                    <p className="hero-bottom-card-text m-0">+1 (456) 453-3456</p>
                  </div>
                </div>
              </div>

              <div className="hero-bottom-b">
                <div className="hero-bottom-card-three d-flex align-items-center justify-content-center gap-3">
                  <img src={CardIcon} alt="" />
                  <div>
                    <p className="hero-bottom-card-subtitle m-0">Credit card</p>
                    <p className="hero-bottom-card-text m-0">123 456 789 1243</p>
                  </div>
                </div>

                <div className="hero-bottom-card-four d-flex align-items-center justify-content-center gap-3">
                  <img src={GmailIcon} alt="" />
                  <div>
                    <p className="hero-bottom-card-subtitle m-0">Email address</p>
                    <p className="hero-bottom-card-text m-0">davidjx@gmail.com</p>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
