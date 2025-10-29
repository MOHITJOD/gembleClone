import React , {useEffect, useState}from "react";
// import { holdings } from "../data/data";
import axios from "axios";
import { VerticalGraph } from "./verticalGraph";
import { API_BASE_URL } from "../config";

const Holdings = () => {

const [allHoldings, setAllHoldings] = useState([]);

const labels = allHoldings.map((subarray)=>subarray["name"]);
const data = {
  labels,
  datasets : [
    {
      label:"Stock Price",
      data : allHoldings.map((stock) => stock.price),
      backgroundColor: "rgba(255,99,132,0.5)" ,
    }
  ]
};
useEffect( ()=>{
  axios.get(`${API_BASE_URL}/allHoldings`).then((res)=>{
    setAllHoldings(res.data);
    console.log("Holdings data loaded:", res.data);
  }).catch((error) => {
    console.error("Error loading holdings:", error);
  })
}, []);

  return (
   <> 
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
    {
      allHoldings.map((stock, index )=>{
        const curValue = stock.price*stock.qty;
        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
        const profitClass = isProfit ? "profit" : "loss";
        const dayChange =  stock.isLoss ? "loss" : "profit";

        return(
           <tr key={index} >
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td >{curValue.toFixed(2)}</td>
            <td className={profitClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
            <td className={profitClass}>{stock.net}</td>
            <td className={dayChange}>{stock.day}</td>
          </tr>
        )
      }
    )
    }

        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
  <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
