import "./SubDishHeading.css";
import SubDishbtn from "./subdishbutton/SubDisbtn"

const SubDishHeading = ({
  heading, description,
}) => {
  return (
    <>
      <div className="sub-dish-detail">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
      <SubDishbtn/>
    </>
  );
};

export default SubDishHeading;
