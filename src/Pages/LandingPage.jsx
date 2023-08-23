import React from "react";
import HomePageImg from "../images/HomePage (600).png";
import LapImg from "../images/laptop.png";
import { styled } from "styled-components";

import { useState } from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
export const LandingPage = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <DIV>
      <div className="container gradient-background ">
        <div className="img-container">
          <img width="100%" src={HomePageImg} alt="homepageimg" />
          <div className="text-overlay">
            <h3 className="h3tag">
              THE FASTEST, EASIEST WAY
              <br /> TO DO YOUR TAX RETURNS.
            </h3>

            <YoutubeEmbed embedId="nAFLsldyJfs" />

            {/* <video controls width="500px" height="300px">
              <source src="https://youtu.be/nAFLsldyJfs" type="video/webm" />
              <source src="https://youtu.be/nAFLsldyJfs" type="video/mp4" />
              Download the
              <a href="https://youtu.be/nAFLsldyJfs">WEBM</a>
              or
              <a href="https://youtu.be/nAFLsldyJfs">MP4</a>
              video.
            </video> */}
          </div>
        </div>
        <div className="form-container">
          <h1 className="h3tag">
            Sign up for the easy
            <br /> way to do tax returns.
          </h1>
          <h4 className="ptag">
            Sign up for free and only pay as submit your tax
          </h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="input1"
              value={formData.input1}
              onChange={handleInputChange}
              placeholder="Name & Surname"
            />
            <input
              type="email"
              name="input2"
              value={formData.input2}
              onChange={handleInputChange}
              placeholder="Email Address"
            />
            <input
              type="number"
              name="input3"
              value={formData.input3}
              onChange={handleInputChange}
              placeholder="Contact No"
            />
            <select
              name="input4"
              value={formData.input4}
              onChange={handleInputChange}
              placeholder="Input 4"
            >
              <option value="">Type of Tax</option>
              <option value="income tax">Income Tax</option>
              <option value="corporate tax">Corporate Tax</option>
              <option value="sales tax">Sales Tax</option>
              <option value="service tax">Service Tax</option>
              <option value="property tax">Property Tax</option>
              <option value="capital gains tax">Capita Gains Tax</option>
              <option value="gst">Goods & Services Tax(GST)</option>
            </select>
            <button type="submit">Start My Tax Return</button>
          </form>
          <p className="ptag">
            By submitting this form I agree to eztax's Terms.
          </p>
        </div>
        {/* seconde section */}

        <div className="section2">
          <div className="img-container2">
            <img width="400px" src={LapImg} alt="" />
          </div>
          <div className="how-does">
            <h2 className="h3tag">How does ez tax Work?</h2>
            <h3 className="h3tag">It's quite easy actually!</h3>
            <h5>
              Let's have a chat. After answering my simple questions I'll
              complete your tax return and file <br />
              it directly with SARS for your maximum possible refund!
            </h5>
            <div>
              <h5 class="icon-heading">Register for a ez tax Account</h5>
              <p className="ptag">
                Tell me a bit about your taxes and I'II show which eztax package
                <br />
                and price suits your needs best.
              </p>
            </div>
            <div>
              <h5 class="icon-heading">Have a chat with me online</h5>
              <p className="ptag">
                We'll complete your tax return correctly, checking all
                deductions
                <br />
                for maximum refund before filing at SARS.
              </p>
            </div>
            <div>
              <h5 class="icon-heading">
                Pay By EFT / Card To Submit Your Return
              </h5>
              <p className="ptag">
                Pay for your tax return service via card directly on the site or
                use
                <br />
                the EFT option if you prefer.
              </p>
            </div>
            <div className="find-button">
              <button className="find">Find Out More</button>
              <button className="find">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="section3up">
          <h2 className="h3tag">How is ez tax Different?</h2>
          <h3 className="h3tag">Great Question</h3>
          <p className="ptag">
            Let's have a chat. After answering my simple questions I'll complete
            your tax return and file it directly with SARS for your maximum
            possible refund!
          </p>
        </div>

        <div className="section3down">
          <div className="one">
            <div>
              <h4 className="icon-heading2">Fully Integrated</h4>
              <p className="ptag">
                Once you authorise ez tax, I can import your IRP5
                <br />
                data and file your tax return directly with SARS.
              </p>
            </div>
            <div>
              <h4 className="icon-heading2">File With Confidence</h4>
              <p className="ptag">
                I'll make sure your SARS tax return is completed
                <br />
                fully and correctly, so you can file with confidence.
                <br />
                On time. Every time.
              </p>
            </div>
            <div>
              <h4 className="icon-heading2">Max Possible Refund</h4>
              <p className="ptag">
                The questions are designed to uncover all your
                <br />
                available tax deductions to reduce your tax and
                <br />
                get your maximum refund.
              </p>
            </div>
          </div>
          <div className="two">
            <div>
              <h4 className="icon-heading2">Tax Experts on Hand</h4>
              <p className="ptag">
                TaxTim is maintained by registered tax practitioners,
                <br />
                who can help you with those slightly more complicated
                <br />
                tax questions.
              </p>
            </div>
            <div>
              <h4 className="icon-heading2">Information is Secure</h4>
              <p className="ptag">
                We are super strict on security. Your personal data is
                <br />
                kept secure via 256-bit SSL at all times. Absolutely no
                <br />
                compromise.
              </p>
            </div>
            <div>
              <h4 className="icon-heading2">Quick and easy</h4>
              <p className="ptag">
                Most people finish their tax returns on TaxTim in 20
                <br />
                minutes or less. But fast doesn't mean rushing - I'm
                <br />
                thorough too.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="container2">
        <div class="twelve">
          <h1>Who Partners With TaxTim?</h1>
          <h2>We have several fantastic partner offers.</h2>
          <br />
        </div>

        <div class="row">
          <div class="three columns text-center">
            <a href="">
              <img
                alt="FNB eBucks"
                height="50"
                src="https://www.taxtim.com/za/images/partner-fnb-ebucks.png"
              />
            </a>
            <br />
            Get eBucks for using ez tax (get 50% back in eBucks) <br />
            <a href="">Read more</a>
          </div>

          <div class="three columns text-center">
            <a href="">
              <img
                alt="Old Mutual Rewards"
                height="50"
                src="https://www.taxtim.com/za/images/partner-old-mutual.png"
              />
            </a>
            <br />
            Get ez tax discounted or FREE <br />
            <a href="">Read more</a>
          </div>

          <div class="three columns text-center">
            <a href="">
              <img
                alt="Momentum / Multiply"
                height="50"
                src="https://www.taxtim.com/za/images/momentum-logo.png"
              />
            </a>
            <br />
            Get ez tax FREE <br />
            <a href="">Read more</a>
          </div>

          <div class="three columns text-center">
            <a href="">
              <img
                alt="Sanlam Reality"
                height="50"
                src="https://www.taxtim.com/za/images/sanlam-reality.png"
              />
            </a>
            <br />
            Get ez tax FREE (earn up to 3,000 tier points) <br />
            <a href="">Read more</a>
          </div>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .img-container {
    position: relative;
    display: inline-block;
    margin-top: -20px;
  }

  .text-overlay {
    position: absolute;
    top: 25%;
    left: 25%;
    right: 45%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: rgb(0, 0, 0);
    padding: 10px;
  }

  .form-container {
    position: absolute;
    top: 140px;
    right: 100px;
    text-align: left;
    gap: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 15px;
    height: 460px;
    border-radius: 10px;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 10px;
  }

  select {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 10px;
  }

  .form-container button {
    padding: 5px 1px;
    border: none;
    border-radius: 5px;
    background-color: #2aa12e;
    color: #fff;
    cursor: pointer;
    width: 310px;
    margin-left: 20px;
    height: 45px;
  }

  .form-container button:hover {
    background-color: #0069d9;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .ptag {
    text-align: left;
    font-weight: 200;
    font-weight: 400;
    color: rgb(0, 0, 0);
  }

  .h3tag {
    font-family: "Montserrat", sans-serif;
  }

  .section2 {
    display: flex;
    justify-content: space-around;
    line-height: -1;
    padding: 40px 0px;
  }

  .how-does {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  .find-button {
    display: flex;
    gap: 50px;
    justify-content: space-between;
  }

  .find {
    margin-top: 10px;
    margin: 0 10px;
    width: 200px;
    height: 30px;
    background-color: #2aa12e;
    color: white;
    font-weight: 300;
    border-radius: 5px;
    border: none;
  }

  .img-container2 {
    margin-top: 19px;
    margin-left: 80px;
    border-radius: 20px 14px 21.5px 20px;
    height: 403px;
  }

  .icon-heading::before {
    content: url("../images/correct.png");
    vertical-align: middle;
    width: 2px;
    height: 1px;
    margin-right: 10px;
  }

  .gradient-background {
    background: linear-gradient(to right, #f9f4f4, #5aeade);
  }

  .section3 {
    margin-top: 55px;
    margin-bottom: 55px;
  }

  .one {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  .two {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  .section3up {
    text-align: center;
  }

  .section3up > p {
    text-align: center;
  }

  .icon-heading2::before {
    content: url("../images/correct.png");
    vertical-align: middle;
    width: 2px;
    height: 1px;
    margin-right: 10px;
  }

  .row {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 20px;
  }

  .twelve {
    text-align: center;
  }

  .container2 {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  /* Media Queries for responsiveness */

  @media screen and (max-width: 768px) {
    .form-container {
      position: static;
      margin-top: 10px;
      right: auto;
      width: 100%;
      padding-bottom: 10px;
    }

    .form-container button {
      width: 100%;
      margin-left: 0;
    }

    .img-container2 {
      margin: 0 auto;
    }

    .row {
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 576px) {
    .text-overlay {
      top: 15%;
      left: 15%;
      right: 15%;
      transform: translate(-50%, -50%);
      font-size: 20px;
    }

    .form-container {
      padding: 10px;
      height: auto;
    }

    .img-container2 {
      height: 300px;
    }

    .find-button {
      flex-direction: column;
    }

    .find {
      width: 100%;
      margin: 10px 0;
    }
  }
`;
