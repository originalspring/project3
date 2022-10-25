const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://originalspring2029:Westcliff#246@cluster0.5lttsxb.mongodb.net/commentDB")

app.use("/", require("./routes/commentRoute"))

app.listen(3001, function(){
  console.log("express server is running on port 3001");
})