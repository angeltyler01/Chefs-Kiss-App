const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://userMachew115:QKHsomoMyKLS6kFr@cluster0.um0mqy0.mongodb.net/chefs-kiss")

app.use("/", require("./routes/routes"));

app.listen(5002, function(){
    console.log("express server is running on port 5002");
})