import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjI3NDdiYTct/NjI3NDdiYTct-MTJmODQxNDAt-w1500._CB658816172_.jpg"
          alt="advertising image"
          srcset=""
        />
        <div className="home_row">
          {/* product */}
          <Product
            id="1"
            title="Bluetooth Headphones, Riwbox XBT-80 Folding Stereo Wireless Bluetooth Headphones Over Ear with Microphone and Volume Control, Wireless and Wired Headset for PC/Cell Phones/TV/ipad (Black Gold)"
            price={31.85}
            image="https://images-na.ssl-images-amazon.com/images/I/81pybH09vyL._AC_SX679_.jpg"
            rating={4}
          />

          {/* product */}
          <Product
            id="2"
            title="Soundance Laptop Stand, Aluminum Computer Riser, Ergonomic Laptops Elevator for Desk, Metal Holder Compatible with 10 to 15.6 Inches Notebook Computer, Silver"
            price={25.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Ox7ORXCsL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          {/* product */}
          <Product
            id="3"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          {/* product */}
          <Product
            id="4"
            title="All-new Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Charcoal"
            price={249.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51EVETDOOeL._AC_SX679_.jpg"
            rating={4}
          />

          {/* product */}
          <Product
            id="5"
            title="All-new Echo Dot (4th Gen) Kids Edition | Designed for kids, with parental controls | Tiger"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61wz%2B9K76jL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          {/* product */}
          <Product
            id="6"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={1399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
