const port=9999;
const express = require('express');
const bodyParser = require('body-parser');

const m = require('./main');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
m.getdetails().then((data) => {
    console.log('api dat retrieved...');
     res.status(200).send(m.genOutput(data));
   }).catch((e)=>{
     console.log(e);
     res.status(400).send(e);
    }
 );
});

app.listen(port,()=>{
  console.log('api reckon Test 1 started at port ', port);
});
