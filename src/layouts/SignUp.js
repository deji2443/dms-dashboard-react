import React from "react";
import "../../src/dms-dashboard/styles.css";
import { Link } from "react-router-dom";

let url = "";
let home = "/";
const SignUp = () => (
  <section>
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand dms-text" href={home}>
          <svg
            width="37"
            height="36"
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="d-inline-block align-text-top mr-2"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.4977 18C36.4977 27.9411 28.4388 36 18.4977 36C8.55656 36 0.497681 27.9411 0.497681 18C0.497681 8.05888 8.55656 0 18.4977 0C28.4388 0 36.4977 8.05888 36.4977 18Z"
              fill="black"
            />
            <path
              d="M22.1436 12.937C23.2524 13.5512 24.1731 14.4349 24.8131 15.4993C25.4531 16.5636 25.7899 17.771 25.7894 19V27H21.4456C21.2304 27.5855 20.8313 28.0926 20.3033 28.4512C19.7754 28.8098 19.1445 29.0024 18.4977 29.0024C17.8509 29.0024 17.2201 28.8098 16.6921 28.4512C16.1641 28.0926 15.765 27.5855 15.5498 27H11.2061V19C11.2056 17.771 11.5423 16.5636 12.1823 15.4993C12.8223 14.4349 13.7431 13.5512 14.8519 12.937C14.6807 12.6419 14.5495 12.327 14.4613 12H11.2061V9.99999H14.4623C14.694 9.14175 15.216 8.38167 15.9464 7.83906C16.6768 7.29646 17.5742 7.00204 18.4977 7.00204C19.4213 7.00204 20.3187 7.29646 21.049 7.83906C21.7794 8.38167 22.3014 9.14175 22.5331 9.99999H25.7894V12H22.5331C22.4451 12.3267 22.3146 12.6416 22.1446 12.937H22.1436ZM18.4977 20C18.2215 20 17.9565 20.1053 17.7612 20.2929C17.5658 20.4804 17.4561 20.7348 17.4561 21V26C17.4561 26.2652 17.5658 26.5196 17.7612 26.7071C17.9565 26.8946 18.2215 27 18.4977 27C18.774 27 19.0389 26.8946 19.2343 26.7071C19.4296 26.5196 19.5394 26.2652 19.5394 26V21C19.5394 20.7348 19.4296 20.4804 19.2343 20.2929C19.0389 20.1053 18.774 20 18.4977 20ZM18.4977 13C19.0503 13 19.5802 12.7893 19.9709 12.4142C20.3616 12.0391 20.5811 11.5304 20.5811 11C20.5811 10.4696 20.3616 9.96085 19.9709 9.58578C19.5802 9.2107 19.0503 8.99999 18.4977 8.99999C17.9452 8.99999 17.4153 9.2107 17.0246 9.58578C16.6339 9.96085 16.4144 10.4696 16.4144 11C16.4144 11.5304 16.6339 12.0391 17.0246 12.4142C17.4153 12.7893 17.9452 13 18.4977 13Z"
              fill="white"
            />
          </svg>
          DMS
        </a>
      </div>
    </nav>

    <div id="dms-home">
      <div className="container-fluid mb-5">
        <div className="row small-device">
          <div className="col-sm-7 text-center">
            <div className="dms-ride">
              <img
                src={require("../../src/images/avatars/Delivery.png")}
                alt=""
              />
              <p className="hero-text">
                {" "}
                Lets help you manage your riders and delivery systems.
              </p>
              <p className="hero-logistics">
                Every logistics company whether it’s a multi-national branding
                corporation or a regular local deserves the basic standard
                necessities in achieving a high service delivery
              </p>
              <button type="button" className="btn btn-primary btn-start">
                Get Started
              </button>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="dms-ride">
              <div className="form signupForm">
                {/* <ProgressBar now={60} /> */}

                {/* <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div> */}

                <h2 className="dms-info">Basic Information</h2>

                <p className="dms-subText">
                  Enter the following information below
                </p>

                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="company">Company Name</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="FZ Logistics"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Company Address"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Company Email Address"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                    <span className="p-viewer2">
                      <i class="fa fa-eye" aria-hidden="true">
                        {" "}
                      </i>
                    </span>
                  </div>
                  <div className="col-12">
                    <div className="dms-privacy">
                      <p className="privacy-text">
                        By clicking "Next" you agree to our{" "}
                        <a href={url}>Terms of Service, Privacy Policy</a>, and
                        to receive marketing communications from Envoy.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <p className="dms-sign">
                      Got an account ? <a href={url}> Sign in</a>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <Link to="/signin" className="register-btn">
                      <button
                        type="submit"
                        className="btn btn-primary btn-start btn-right"
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SignUp;
