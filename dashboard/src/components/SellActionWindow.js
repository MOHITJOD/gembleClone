import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";
import axios from "axios";

const SellActionWindow = ({ uid, price, availableQty }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const stockPrice = price || 0;
  const generalContext = useContext(GeneralContext);

  const handleSellClick = () => {
    if (stockQuantity > availableQty) {
      alert(`You only have ${availableQty} shares available to sell.`);
      return;
    }

    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "sell",
    });
    generalContext.closeSellWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="sell-window-container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
              min="1"
              max={availableQty}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              value={stockPrice}
              readOnly
            />
          </fieldset>
        </div>
        <div className="available-qty">
          <span>Available: {availableQty} shares</span>
        </div>
      </div>

      <div className="buttons">
        <span>Total value ₹{(stockPrice * stockQuantity).toFixed(2)}</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
