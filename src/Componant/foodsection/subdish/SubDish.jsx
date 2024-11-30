import React from "react";
import "./SubDish.css";
import Subdishimg from "./subdishimg/SubDisimg";
import SubDishHeading from "./subdishheading/SubDisimgHeading";

const SubDish = ({ imgsrc, heading, description }) => {
  return (
    <div className="sub-dish">
      <Subdishimg imgsrc={imgsrc}/>
      <SubDishHeading heading={heading} description={description}/>
    </div>
  );
};

export default SubDish;
