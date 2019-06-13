import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="myFooter">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h2 className="logo"> LOGO </h2>
          </div>
          <div className="col-sm-2">
            <h5>Get started</h5>
            <ul>
              <li>Home</li>
              <li>Sign up</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>About us</h5>
            <ul>
              <li>Organization Information</li>
              <li>Contact us</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>Support</h5>
            <ul>
              <li>FAQ</li>
              <li>Help desk</li>
              <li>Forums</li>
            </ul>
          </div>
          <div className="col-sm-3">
            <div className="social-networks">
              <i className="fa fa-twitter" />
              <i className="fa fa-facebook" />
              <i className="fa fa-google-plus" />
            </div>
            <button type="button" className="btn btn-default">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2019 Copyright Text </p>
      </div>
    </footer>
  );
};

export default Footer;
