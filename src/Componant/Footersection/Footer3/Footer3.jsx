import React from "react";
import "./Footer3.css";
import appstore from "../footer2/app_store.png";
import playstore from "../footer2/play_store.png";

const Form = () => {
  return (
    <>
      <div className="footer-3">
        <div></div>
        <p>
          <a href="#">Carrers</a>
        </p>
        <p>
          <a href="#">Blog</a>
        </p>
        <p>
          <a href="#">Testimonials</a>
        </p>
        <p>
          <a href="#">Coustomer Care</a>
        </p>
        <p>
          <a href="#">Reviews</a>
        </p>
        <p>
          <a href="#">Location</a>
        </p>
        <h2>Download Our App</h2>
      <img src={appstore} />
      <img src={playstore} />
      </div>
    </>
  );
};

export default Form;
