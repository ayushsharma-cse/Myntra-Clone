import React from "react";
import "./empty.css";
import { MyntraData } from "../../data";
import { useNavigate } from "react-router-dom";

function Empty() {
  const navigate = useNavigate();

  return (
    <div className="empty_cart">
      <img src={MyntraData.icons.emptyCart} alt="empty cart" />
      <span>Hey, it feels so light!</span>
      <p>There is nothing in your bag, Let's add some items.</p>
      <button onClick={() => navigate("/product")}>ADD ITEMS</button>
    </div>
  );
}

export default Empty;
