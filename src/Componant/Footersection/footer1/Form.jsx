import React from "react";
import "./Form.css";

const Form = () => {
  return (
      <div className="footer-1">
        <form action="mailto:rtiwari@gmail.com">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Enter Your Email...." required />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <input type="submit" value="Send" className="sendbtn" />
        </form>
      </div>
  );
};

export default Form;
