import "./Services.css";
import Servicecard from "./servicecards/Servicecard";
import ServiceHeading from "./serviceheading/ServicesHeading";
import food1 from "../img/food-delivery.png";
import food2 from "./servicecards/subserviceimg/subserviceimg/parcel_icon.png";
import food3 from "./servicecards/subserviceimg/subserviceimg/parcel_icon.png";

const Service = ({ imgsrc, heading, description }) => {
  return (
    <div id="Service">
      <ServiceHeading />
      <div className="Service-section">
        <Servicecard
          imgsrc={food1}
          heading="free Delivery"
          description="Tailor your meal to your liking with our customizable options.."
        />
        <Servicecard
          imgsrc={food1}
          heading="Hygenic Food"
          description="Tailor your meal to your liking with our customizable options.."
        />
        <Servicecard
          imgsrc={food1}
          heading="free Delivery"
          description="Tailor your meal to your liking with our customizable options.."
        />
      </div>
    </div>
  );
};

export default Service;
