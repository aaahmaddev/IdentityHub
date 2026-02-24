import React from "react";
import HedaerLogo from "../../images/h-logo.png";
import { NavLink } from "react-router-dom";
import "./index.css";

const index = () => {
  return (
    <>
      <header className="p-4 bgc-body">
        <div className="container">
          <div className="header-inner p-3 d-flex justify-content-between align-items-center">
            <div className="header-logo">
              <img className="header-logo-img img-fluid" src={HedaerLogo} alt="Logo" />
            </div>

            <div className="header-nav">
              <ul className="header-ul p-0 m-0">
                <li className="header-li list-group-item">
                  <NavLink className="header-nav-link text-decoration-none me-3 text-gray">
                    Services
                  </NavLink>

                  <NavLink className="header-nav-link text-decoration-none me-3 text-gray">
                    Features
                  </NavLink>

                  <NavLink className="header-nav-link text-decoration-none me-3 text-gray">
                    Pricing
                  </NavLink>

                  <NavLink className="header-nav-link text-decoration-none me-3 text-gray">
                    Partners
                  </NavLink>

                  <NavLink className="header-nav-link text-decoration-none text-gray">
                    About us
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="header-end">
              <button className="header-button d-flex align-items-center justify-content-center text-gray">Start free trial</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
