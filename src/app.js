const express = require("express");
const app = express();
require('./db/connect');
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require('./routers/product'));

//call the port number here
app.listen(port,()=>{
   console.log(`Our Port Number is ${port}`);
});