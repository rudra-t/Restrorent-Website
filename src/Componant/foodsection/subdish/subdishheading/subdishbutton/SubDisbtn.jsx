import "./SubDishbtn.css";

const SubDishbtn = () => {
  return (
    <div className="sub-dish-button">
      <a href="#">
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
      <div className="rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
  );
};

export default SubDishbtn;
