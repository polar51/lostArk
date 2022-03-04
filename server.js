const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://polar51:Kodo760386!@cluster0.wlduh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';






app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/css',express.static(`${__dirname}/css`));
app.use('/js',express.static(`${__dirname}/js`));

app.get("/",(req,res)=>{
  res.sendFile(`${__dirname}/index.html`,(err)=>{
    if(err){
      console.log(err);
      res.end(err.massage);
    };
  });
});

app.post("/add",(req,res)=>{
  var name = req.body.name;
  var level = req.body.level;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("lostArk");
    var myobj = { "name": name, "level": level };
    dbo.collection("user").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("success");
      db.close();
    });
  });
})





app.listen(3000);

