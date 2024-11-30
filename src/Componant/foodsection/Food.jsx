import "./Food.css";
import SubDish from "./subdish/SubDish";
import food1 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food2 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food3 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food4 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food5 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food6 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food7 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food8 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food9 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food10 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food11 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food12 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food13 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food14 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food15 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food16 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food17 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food18 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food19 from "./subdish/subdishimg/subdishimg/food_7.jpg";
import food20 from "./subdish/subdishimg/subdishimg/food_7.jpg";

const Food = (imgsrc, heading, descrption) => {
  return (
    <div className="Food-Menu-container" id="Food-Menu">
      <div className="Food-Menu-heading">
        <h1>Explore Our Menu</h1>
        <h2>Choose your desired dish from our menu</h2>
        <p>
          Dive into our yummy meals, made just for you and brought to your door,
          so you can enjoy every bite without waiting!
        </p>
        <div className="filterable-button">
          <button className="active" data-name="all">
            Show All
          </button>
          <button data-name="Deserts">Deserts</button>
          <button data-name="Sauth-Indian">South Indian</button>
          <button data-name="Chainies">Chainies</button>
          <button data-name="Thalies">Chainies</button>
        </div>
      </div>
      <div className="dishes">
        <SubDish
          imgsrc={food1}
          heading="free Delivery"
          description="A delicious kathi roll is waiting for you"
          data-name="Sweets"
        />
        <SubDish
          imgsrc={food2}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Sweets"
        />
        <SubDish
          imgsrc={food3}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Deserts"
        />
        <SubDish
          imgsrc={food4}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Deserts"
        />
        <SubDish
          imgsrc={food5}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Deserts"
        />
        <SubDish
          imgsrc={food6}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Deserts"
        />
        <SubDish
          imgsrc={food7}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Chinies"
        />
        <SubDish
          imgsrc={food8}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Chainies"
        />
        <SubDish
          imgsrc={food9}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Chainies"
        />
        <SubDish
          imgsrc={food10}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Chainies"
        />
        <SubDish
          imgsrc={food11}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Chainies"
        />
        <SubDish
          imgsrc={food12}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Thalies"
        />
        <SubDish
          imgsrc={food13}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Thalies"
        />
        <SubDish
          imgsrc={food14}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Thalies"
        />
        <SubDish
          imgsrc={food15}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="Thalies"
        />
        <SubDish
          imgsrc={food16}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="South-Indian"
        />
        <SubDish
          imgsrc={food17}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="South-Indian"
        />
        <SubDish
          imgsrc={food18}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="South-Indian"
        />
        <SubDish
          imgsrc={food19}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="South-Indian"
        />
        <SubDish
          imgsrc={food20}
          heading="free Delivery"
          description="A Delicious Kathi Roll is waiting for you."
          data-name="South-Indian"
        />
      </div>
    </div>
  );
};

export default Food;
