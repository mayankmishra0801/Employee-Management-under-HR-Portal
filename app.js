require("dotenv").config();

const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")

// const mongoose = require('./db.js')


const port = process.env.PORT

const connectDB = require('./config/hrDb')

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/leaveApp"

connectDB(MONGO_URI)
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}))



var PORT = process.env.PORT || 3000;
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
    });