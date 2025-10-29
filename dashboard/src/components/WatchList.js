import React ,{useState, useContext} from "react";
import {Tooltip, Grow} from "@mui/material"
import {watchlist} from "../data/data.js";
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from "@mui/icons-material"
import GeneralContext from "./GeneralContext";
import axios from "axios";
import { DhoklaGraph } from "./dhoklaGraph";


const labels = watchlist.map((stock)=>stock.name);
const WatchList = () => {

const data={
  labels,
  datasets:[
    {
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ]
}
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
{watchlist.map((stock, index) => {
    return(
  <WatchListItem key={index} stock={stock} />
)
  })}

      </ul>
      <DhoklaGraph data={data} />
    </div>
  );
};

export default WatchList;


const WatchListItem = ({stock}) => {
  const [showWatchlistActions , setShowWatchlistActions] = useState(false);
  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  }
   const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
<p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
<div className="itemInfo">
<span className="percent">{stock.percent}</span>
{stock.isDown ? (<KeyboardArrowDown className="down"/>) : (<KeyboardArrowUp className="up"/>)}
<span className="price">{stock.price}</span>
</div>
</div>
      {showWatchlistActions && <WatchListActions uid={stock.name} price={stock.price} />}
</li>
  )
}


const WatchListActions = ({uid, price}) => {
  const generalContext = useContext(GeneralContext);
  
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid, price);
  };

  const handleSellClick = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/checkHolding/${uid}`);
      
      if (response.data.exists && response.data.qty > 0) {
        generalContext.openSellWindow(uid, price, response.data.qty);
      } else {
        alert(`You don't own any shares of ${uid} to sell.`);
      }
    } catch (error) {
      console.error("Error checking holding:", error);
      alert("Error checking stock ownership. Please try again.");
    }
  };
  
  return(
    <span className="actions">
      <span>
        <Tooltip  title= "Buy (B)" placement="top" arrow TransitionComponent={Grow} >
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip  title= "Sell (S)" placement="top" arrow TransitionComponent={Grow} >
          <button className="sell" onClick={handleSellClick}>Sell</button>
        </Tooltip>
        <Tooltip  title= "Analytics (A)" placement="top" arrow TransitionComponent={Grow} >
         <button className="action"> 
          <BarChartOutlined className="icon"/>
          </button>      
  </Tooltip>
        <Tooltip  title= "More (M)" placement="top" arrow TransitionComponent={Grow} >
           <button className="action"> 
          <MoreHoriz className="icon"/> 
          </button> 
        </Tooltip>
      </span>
    </span>
  )
}