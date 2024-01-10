const express = require('express');
require("dotenv").config();
const mongoDB = require("./database");
const app = express()
const port = process.env.PORT || 5000;
const user_route_UserData =  "./Routes/Createuser";

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  next();
})
app.use(express.json())
app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.use('/api',require(user_route_UserData));


app.listen(port, async() => {
  console.log(`Listening on port ${port}`);
  await mongoDB();
  
})