import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/thilgma/paint/D15978938_Paint_Selector_stripe._CB433730419_.jpg"
          alt="ad image"
          srcset=""
        />
        <div>
          <h2 className="checout_title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <h2>The Subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;