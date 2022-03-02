const express = require('express');
const bodyParser = require('body-parser')
const app = express();




app.use(bodyParser.urlencoded({extended:false}));

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




app.use(express.json()) ;
app.post('/', (req, res)=>{ 
  let name = req.body.char_name;
  let level = req.body.char_level;
  console.log(req.body);
  res.send(req.body);

});



app.listen(3000);