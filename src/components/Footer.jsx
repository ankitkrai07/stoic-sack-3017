import React from "react";

import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <DIV>
      <div className="footer-container">
        <footer className="main">
          <div className="container">
            <div className="rowhidebelowtablet">
              <div className="six columns">
                <h3>About Ez Tax</h3>

                <div>
                  <div className="col">
                    <div className="column">
                      <a href="#">The Ez Tax Story</a>
                      <a href="#">Security and Trust</a>
                      <a href="#">Become an Affiliate</a>
                    </div>

                    <div className="column">
                      <a href="#">How Ez Tax Works</a>
                      <a href="#">What Ez Tax Costs</a>
                      <a href="#">Refund Policy</a>
                      <a href="#">Jobs at Ez Tax</a>
                    </div>

                    <div className="column">
                      <a href="#">Clerk Assist</a>
                      <a href="#">Vehicle Logbook</a>
                      <a href="#">Expense Tracker App</a>
                      <a href="#">Small Business Tax</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="four columns offset-by-two">
                <h3>Tax Help</h3>

                <div className="col">
                  <div className="column">
                    <a href="#">Ask a Tax Question</a>

                    <a href="#">Tax Calculators</a>
                    <a href="#">Step-by-step Guides</a>
                    <a href="#">Tax Q &amp; A</a>
                  </div>
                  <div className="column">
                    <a href="#">Register for Ez Tax</a>
                    <a href="#">Ez Tax Blog</a>
                    <a href="#">Tax Season Alerts</a>
                    <a href="#">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-container">
              <a href="#" target="_blank">
                <a>
                  <BsTwitter />
                </a>
                <i className="social fab fa-twitter"></i>
              </a>{" "}
              &nbsp;
              <a href="#" target="_blank">
                <a>
                  <ImFacebook2 />
                </a>
                <i className="social fab fa-facebook"></i>
              </a>{" "}
              &nbsp;
              <a href="#" target="_blank">
                <a>
                  <ImInstagram />
                </a>

                <i className="social fab fa-instagram"></i>
              </a>{" "}
              &nbsp;
              <a href="#" target="_blank">
                <a>
                  <BsLinkedin />
                </a>
                <i className="social fab fa-linkedin"></i>
              </a>
            </div>

            <div className=" terms-container">
              <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a> |{" "}
              <a href="#">Sitemap</a>
              <br />
              Copyright ©️ 2023 Ez Tax | Human Robot Pty Ltd. All Rights
              Reserved.
              <br />
              Supported by SARS Registered Tax Practitioner PR-0009352 | 32
              Kloof St, Gardens, Cape Town, South Africa | Site secured by
              Comodo Security.
            </div>
          </div>
        </footer>
      </div>
    </DIV>
  );
};

export default Footer;

const DIV = styled.div`
  .main {
    background: #444444;
    color: white;
    text-align: center;
    padding: 20px 0 20px 0;
    /* z-index: 1; */
    /* margin-top: 2em; */
  }
  .rowhidebelowtablet {
    display: flex;
    margin: auto;
    justify-content: space-around;
    gap: 10px;
  }

  .column {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .col {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
  }
  h3 {
    border-bottom: 1px solid white;
    padding: 2px;
    font-family: "Montserrat";
  }
  a {
    text-decoration: none;
    color: white;
  }
  .social-container {
    display: flex;
    width: 15%;
    justify-content: space-between;
    margin: 25px auto;
    font-size: 20px;
  }

  @media (min-width: 376px) and (max-width: 820px) {
    .rowhidebelowtablet {
      flex-direction: column;
    }
  }
  @media (max-width: 375px) {
    .rowhidebelowtablet {
      flex-direction: column;
    }
  }
`;
