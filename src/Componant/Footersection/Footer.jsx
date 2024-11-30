import React from "react";
import "./Footer.css";
import Form from "./footer1/Form";
import Footer2 from "./footer2/Footer-2";
import Footer3 from "./Footer3/Footer3";
function Footer() {
  return (
    <div id="Footer" className="Container">
      <div className="Quete">
        <h2>Want to Connect</h2>
      </div>
      <div className="Footer">
        <Form/>
        <Footer2 />
        <Footer3 />
      </div>
      <div className="Credit">
        <p>Made By Rudra Tiwari: Copyright2024 : All rights reserved</p>
      </div>
    </div>
  );
}
export default Footer;
