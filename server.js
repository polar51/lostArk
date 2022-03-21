const express = require('express');
const bodyParser = require('body-parser');
const text = require('body-parser/lib/types/text');
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


app.get("/test",(req,res)=>{
  MongoClient.connect(url, function(err, db){
    if(err != null){
      res.json({'count':0});
    } else {
      var dbo = db.db("lostArk");
      dbo.collection("user").find({}).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        db.close();
      });
    }
  })
})


app.listen(3000);

