const express = require('express');
const app = express();

// load config from .env file to process object
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());


//import routes of the todo API
const todoRoutes = require("./routes/todos");


// mount the todo API routes
app.use("/api/v1",todoRoutes);




app.listen(PORT,()=>{
    console.log(`server is running on PORT NO: ${PORT}`);
});


// connect to the database server
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HOME PAGE!</h1>`);
})