var express = require("express");
var app = express();
var port = 3000;
 
// app.get("/", (req, res) => {
//     // res.send("Hello World");
//     res.sendFile(__dirname+"/popup.jsx");
// });
const path = require('path');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/emailDB", {useNewUrlParser: true});

const emailSchema = new mongoose.Schema ({
    email: String
});

const Email = mongoose.model("Email", emailSchema);

// const email = new Email ({
//     email: "ani@gmail.com"
// });

// email.save();

app.post("/addemail", (req, res) => {
    var myData = new Email(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
});