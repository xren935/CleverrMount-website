// express server 
// this server will run on port 4000 
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(cors());
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

// connect to the database using mongoose 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/emailDB", {useNewUrlParser: true});

// specifying schema for the db 
const emailSchema = new mongoose.Schema ({
    email: String
});
const Email = mongoose.model("Email", emailSchema);
const email = new Email ({
    email: "ani@gmail.com"
});
email.save();