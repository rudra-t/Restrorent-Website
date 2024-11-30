import "./Subserviceheading.css";
const Subserviceheading = ({ heading, description }) => {
  return (
    <>
      <div className="subserviceheading">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Subserviceheading;
