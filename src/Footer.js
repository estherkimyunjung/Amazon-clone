import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div></div>
        <div className="footer_columns">
          <h3>Get to Know Us</h3>
          <div className="footer_rows">
            <h4>Careers</h4>
            <h4>Blog</h4>
            <h4>About Amazon</h4>
            <h4>Sustanability</h4>
            <h4>Press Center</h4>
            <h4>Investor Relations</h4>
            <h4>Amazon Devices</h4>
            <h4>Amazon Tours</h4>
          </div>
        </div>
        <div className="footer_columns">
          <h3>Make Money with Us</h3>
          <div className="footer_rows">
            <h4>Sell products on Amazon</h4>
            <h4>Sell apps on Amazon</h4>
            <h4>Become an Affiliate</h4>
            <h4>Advertise Your Products</h4>
            <h4>Self-Publish with Us</h4>
            <h4>Host an Amazon Hub</h4>
            <h4>›See More Make Money with Us</h4>
          </div>
        </div>
        <div className="footer_columns">
          <h3>Amazon Payment Products</h3>
          <div className="footer_rows">
            <h4>Amazon Rewards Visa Signature Cards</h4>
            <h4>Amazon.com Store Card</h4>
            <h4>Amazon Business Cardn</h4>
            <h4>Amazon Business Line of Credit</h4>
            <h4>Shop with Points</h4>
            <h4>Credit Card Marketplace</h4>
            <h4>Reload Your Balance</h4>
            <h4>Amazon Currency Converter</h4>
          </div>
        </div>
        <div className="footer_columns">
          <h3>Let Us Help You</h3>
          <div className="footer_rows">
            <h4>Amazon and COVID-19</h4>
            <h4>Your Account</h4>
            <h4>Your Orders</h4>
            <h4>Shipping Rates & Policies</h4>
            <h4>Amazon Prime</h4>
            <h4>Returns & Replacements</h4>
            <h4>Amazon Assistant</h4>
            <h4>Help</h4>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>
          Made by <strong> Esther Kim </strong>
          (Full-stack Developer)
          <em> Email : estherkimyunjung@gmail.com</em>
          <br />
          <p className="footer_copyright_year">©2021 Esther Kim</p>
        </p>
      </div>
    </>
  );
}

export default Footer;
