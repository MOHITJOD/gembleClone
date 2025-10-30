require('dotenv').config();
const {holdingModel} = require("./model/holdingModel");
const {positionModel} = require("./model/positionModel");
const {orderModel} = require("./model/orderModel");
const express = require ("express");
const app = express();
app.set('trust proxy', 1);
const mongoose = require("mongoose");
const PORT =   process.env.PORT || 3002;
const uri= process.env.MONGO_URL;
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const allowedOrigins = [
  process.env.DASHBOARD_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"]
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


