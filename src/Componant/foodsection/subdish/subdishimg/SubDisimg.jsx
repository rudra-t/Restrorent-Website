import React from "react";
import "./SubDishimg.css";

const Dishimg = ({ imgsrc }) => {
  return (
    <div className="sub-dish-img">
      <img src={imgsrc} />
    </div>
  );
};

export default Dishimg;
