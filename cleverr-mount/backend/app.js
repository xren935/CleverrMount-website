var express = require("express");
var app = express();
// var port = 3000;

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

async function main(){
  const url = "mongodb+srv://admin:admin123@cluster0.161b1.mongodb.net/emailDB?retryWrites=true&w=majority";
  const client = new MongoClient(url);

try {
  await client.connect(); 
  await listDatabases(client);
}catch(e){
  console.error(e);
}finally{
  await client.close();
}


}
mongoose.connect("mongodb+srv://admin:admin123@cluster0.161b1.mongodb.net/emailDB", {useNewUrlParser: true});

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