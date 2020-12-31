var express = require("express");
var app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// use the port that heroku has set up
let port = process.env.PORT; 
if(port == null || port == ""){
  port = 3000;
}
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin123@cluster0.12gbf.mongodb.net/emailDB", {useNewUrlParser: true});

const emailSchema = new mongoose.Schema ({
    useremail: String
});

const Email = mongoose.model("Email", emailSchema);

app.post("/", (req, res) => {
    var newEmail = new Email(req.body);
    newEmail.save();
      // .then(item => {
      //   res.send("item saved to database");
      // })
      // .catch(err => {
      //   res.status(400).send("unable to save to database");
      // });
});