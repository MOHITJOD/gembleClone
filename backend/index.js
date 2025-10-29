require('dotenv').config();
const {holdingModel} = require("./model/holdingModel");
const {positionModel} = require("./model/positionModel");
const {orderModel} = require("./model/orderModel");
const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const PORT =   process.env.PORT || 3002;
const uri= process.env.MONGO_URL;
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

app.get('/allHoldings', async (req, res)=>{
    let allHoldings = await holdingModel.find();
    res.json(allHoldings);
});


app.get('/allPositions', async (req, res)=>{
    let allPositions = await positionModel.find();
    res.json(allPositions);
});

app.get('/allOrders', async (req, res)=>{
    let allOrders = await orderModel.find();
    res.json(allOrders);
});

app.get('/checkHolding/:stockName', async (req, res)=>{
    try {
        const stockName = req.params.stockName;
        const holding = await holdingModel.findOne({ name: stockName });
        
        if (holding) {
            res.json({ 
                exists: true, 
                qty: holding.qty,
                price: holding.price 
            });
        } else {
            res.json({ exists: false, qty: 0 });
        }
    } catch (error) {
        console.error("Error checking holding:", error);
        res.status(500).json({ error: "Error checking holding" });
    }
});

app.post('/newOrder', async (req, res)=>{
    try {
        const { name, qty, price, mode } = req.body;
        
        // Convert to numbers to ensure proper calculation
        const orderQty = Number(qty);
        const orderPrice = Number(price);
        
        // Save the order
        let newOrder = new orderModel({
            name: name,
            qty: orderQty,
            price: orderPrice,
            mode: mode,
        });
        await newOrder.save();

        // Update holdings based on order type
        const existingHolding = await holdingModel.findOne({ name: name });

        if (mode === "buy") {
            if (existingHolding) {
                // Update existing holding - calculate new average price
                const totalQty = existingHolding.qty + orderQty;
                const totalCost = (existingHolding.avg * existingHolding.qty) + (orderPrice * orderQty);
                const newAvg = totalCost / totalQty;

                await holdingModel.updateOne(
                    { name: name },
                    { 
                        qty: totalQty,
                        avg: newAvg,
                        price: orderPrice
                    }
                );
            } else {
                // Create new holding
                let newHolding = new holdingModel({
                    name: name,
                    qty: orderQty,
                    avg: orderPrice,
                    price: orderPrice,
                    net: "+0.00%",
                    day: "+0.00%",
                });
                await newHolding.save();
            }
        } else if (mode === "sell") {
            if (existingHolding) {
                const newQty = existingHolding.qty - orderQty;
                
                if (newQty > 0) {
                    // Update quantity
                    await holdingModel.updateOne(
                        { name: name },
                        { 
                            qty: newQty,
                            price: orderPrice
                        }
                    );
                } else if (newQty === 0) {
                    // Remove holding if all shares are sold
                    await holdingModel.deleteOne({ name: name });
                } else {
                    return res.status(400).json({ 
                        success: false, 
                        message: "Cannot sell more shares than you own" 
                    });
                }
            } else {
                return res.status(400).json({ 
                    success: false, 
                    message: "You don't own this stock" 
                });
            }
        }

        res.json({ success: true, message: "Order placed and holdings updated successfully!" });
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).json({ success: false, message: "Error placing order: " + error.message });
    }
});

// Authentication routes
app.use("/auth", authRoute);


//port and mongo connection code
app.listen(PORT, ()=>{
    console.log("app started 3002");
    mongoose.connect(uri);
    console.log("db connected")
});



//holdings data loding code
// app.get('/addHoldings', async (req, res)=>{  
//     let tempHoldings= [
//         {
//           name: "BHARTIARTL",
//           qty: 2,
//           avg: 538.05,
//           price: 541.15,
//           net: "+0.58%",
//           day: "+2.99%",
//         },
//         {
//           name: "HDFCBANK",
//           qty: 2,
//           avg: 1383.4,
//           price: 1522.35,
//           net: "+10.04%",
//           day: "+0.11%",
//         },
//         {
//           name: "HINDUNILVR",
//           qty: 1,
//           avg: 2335.85,
//           price: 2417.4,
//           net: "+3.49%",
//           day: "+0.21%",
//         },
//         {
//           name: "INFY",
//           qty: 1,
//           avg: 1350.5,
//           price: 1555.45,
//           net: "+15.18%",
//           day: "-1.60%",
//           isLoss: true,
//         },
//         {
//           name: "ITC",
//           qty: 5,
//           avg: 202.0,
//           price: 207.9,
//           net: "+2.92%",
//           day: "+0.80%",
//         },
//         {
//           name: "KPITTECH",
//           qty: 5,
//           avg: 250.3,
//           price: 266.45,
//           net: "+6.45%",
//           day: "+3.54%",
//         },
//         {
//           name: "M&M",
//           qty: 2,
//           avg: 809.9,
//           price: 779.8,
//           net: "-3.72%",
//           day: "-0.01%",
//           isLoss: true,
//         },
//         {
//           name: "RELIANCE",
//           qty: 1,
//           avg: 2193.7,
//           price: 2112.4,
//           net: "-3.71%",
//           day: "+1.44%",
//         },
//         {
//           name: "SBIN",
//           qty: 4,
//           avg: 324.35,
//           price: 430.2,
//           net: "+32.63%",
//           day: "-0.34%",
//           isLoss: true,
//         },
//         {
//           name: "SGBMAY29",
//           qty: 2,
//           avg: 4727.0,
//           price: 4719.0,
//           net: "-0.17%",
//           day: "+0.15%",
//         },
//         {
//           name: "TATAPOWER",
//           qty: 5,
//           avg: 104.2,
//           price: 124.15,
//           net: "+19.15%",
//           day: "-0.24%",
//           isLoss: true,
//         },
//         {
//           name: "TCS",
//           qty: 1,
//           avg: 3041.7,
//           price: 3194.8,
//           net: "+5.03%",
//           day: "-0.25%",
//           isLoss: true,
//         },
//         {
//           name: "WIPRO",
//           qty: 4,
//           avg: 489.3,
//           price: 577.75,
//           net: "+18.08%",
//           day: "+0.32%",
//         },
//       ];

//       tempHoldings.forEach((item)=>{
//         let newHolding = new holdingModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         }) 
//         newHolding.save();  
//       });
//       res.send("done!");
// })

//position data loding code
// app.get('/addPositions', async (req, res)=>{
//     let tempPositions= [
//             {
//               product: "CNC",
//               name: "EVEREADY",
//               qty: 2,
//               avg: 316.27,
//               price: 312.35,
//               net: "+0.58%",
//               day: "-1.24%",
//               isLoss: true,
//             },
//             {
//               product: "CNC",
//               name: "JUBLFOOD",
//               qty: 1,
//               avg: 3124.75,
//               price: 3082.65,
//               net: "+10.04%",
//               day: "-1.35%",
//               isLoss: true,
//             },
          
//       ];

//       tempPositions.forEach((item)=>{
//         let newPosition = new positionModel({
//             product: item.product,
//               name: item.name,
//               qty: item.qty,
//               avg: item.avg,
//               price: item.price,
//               net: item.net,
//               day: item.day,
//               isLoss: item.isLoss,
//         }) 
//         newPosition.save();  
//       });
//       res.send("done!");
// })