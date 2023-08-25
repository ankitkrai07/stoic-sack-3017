import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../images/logoeztax.png";

const Navbar = () => {
  return (
    <DIV>
      <div className="top-nav">
        <div className="reg-nav">
          <div>
            <p>Registered for SARS eFiling? Click here to get started.</p>
          </div>
        </div>
        <div className="link-div">
          <div>
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div>
            <Link className="link" to="/faq">
              FAQ
            </Link>
          </div>
          <div>
            <Link className="link" to="/students">
              Students
            </Link>
          </div>
          <div>
            <Link className="link" to="/calculators">
              Calculators
            </Link>
          </div>
          <div>
            <Link className="link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="top-nav-II">
        <div className="logo-img">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="top-nav-III">
          <div>
            <a href="/howitworks" className="anch">
              How it works
            </a>
          </div>
          <div>
            <a href="/" className="anch">
              Pricing
            </a>
          </div>
          <div>
            <a href="/" className="anch">
              Help
            </a>
          </div>
          <div>
            <button className="getstart">GET STARTED</button>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  .top-nav {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    background-color: #d7ecf1;
    color: rgb(0, 0, 0);
    height: 50px;
    font-size: 0.85em;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .reg-nav {
    color: rgb(7, 7, 7);
    width: 50%;
    justify-content: space-around;
    margin-right: 250px;
  }

  .link-div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 1px;
    color: rgb(0, 0, 0);
    align-items: center;
    width: 40%;
    font-weight: 600;
  }

  .link {
    color: rgb(2, 0, 0);
    text-decoration: none;
    font-size: 1em;
  }

  .top-nav-II {
    display: flex;
    justify-content: space-around;
    background-color: #dcf1f6;
    align-items: center;
    padding: 15px;
  }

  .top-nav-III {
    display: flex;
    justify-content: space-around;
    gap: 15px;
    height: 100%;
    margin-left: 200px;
  }

  .anch {
    color: rgb(2, 0, 0);
    text-decoration: none;
    font-size: 18px;
    font-family: "Droid Sans", Arial, sans-serif;
    margin-left: 0.2em;
    padding: 5px;
  }

  .logo-img {
    width: 60px;
    height: 30px;
    vertical-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    align-items: center;
    margin-right: 300px;
  }

  .getstart {
    width: auto;
    height: 30px;
    color: white;
    border: 2px solid #2aa12e;
    background-color: #2aa12e;
    border-radius: 5px;
  }

  /* Media query for medium-sized screens */
  @media (max-width: 820px) {
    .top-nav {
      justify-content: space-between; /* Adjust the spacing of elements */
    }

    .reg-nav {
      width: 40%; /* Reduce the width */
      margin-right: 0; /* Remove the right margin */
    }

    .link-div {
      width: 60%; /* Increase the width */
    }

    .logo-img {
      margin-right: 0; /* Remove the right margin */
    }

    .top-nav-III {
      margin-left: 0; /* Remove the left margin */
    }
  }

  /* Media query for small screens */
  @media (max-width: 375px) {
    .reg-nav {
      display: none; /* Hide the registration section on small screens */
    }

    .link-div {
      justify-content: center; /* Center align the links */
      width: 100%; /* Occupy full width */
      margin-top: 15px; /* Add some margin at the top */
    }

    .link {
      font-size: 0.9em; /* Reduce the font size */
    }

    .top-nav-II {
      flex-direction: column; /* Stack the elements vertically */
      padding: 10px; /* Adjust the padding */
    }

    .top-nav-III {
      gap: 10px; /* Reduce the gap between elements */
      margin-left: 0; /* Remove the left margin */
    }

    .anch {
      font-size: 16px; /* Reduce the font size */
      padding: 3px; /* Adjust the padding */
    }

    .logo-img {
      margin-bottom: 10px; /* Reduce the margin at the bottom */
    }

    .getstart {
      display: none; /* Hide the "GET STARTED" button on small screens */
    }
  }
`;
