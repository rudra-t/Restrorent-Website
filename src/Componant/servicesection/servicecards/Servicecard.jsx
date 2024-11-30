import "./Servicecard.css";
import Subserviceimg from "./subserviceimg/Subserviceimg";
import Subserviceheading from "./subserviceheading/Subserviceheading";
import Subservicebtn from "./servicebtn/Subservicebtn";

const subervicecard = ({ imgsrc, heading, description }) => {
  return (
    <div className="sub-service">
      <Subserviceimg imgsrc={imgsrc} />
      <Subserviceheading heading={heading} description={description} />
    </div>
  );
};

export default subervicecard;
