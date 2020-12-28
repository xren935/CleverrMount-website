var express = require("express");
var app = express();
var port = 3000;

// var cors = require('cors');
// app.use(cors());
// app.use(cors({origin: true, credentials: true}));
// app.get("/", (req, res) => {
//     // res.send("Hello World");
//     res.sendFile(__dirname+"/popup.jsx");
// });

const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  // res.sendFile(__dirname+"/index.html");
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
    useremail: String
});

const Email = mongoose.model("Email", emailSchema);

// const email = new Email ({
//     email: "ani@gmail.com"
// });

// email.save();
// console.log("inside app.js")

app.post("/addemail", (req, res) => {
    var newEmail = new Email(req.body);
    newEmail.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
});