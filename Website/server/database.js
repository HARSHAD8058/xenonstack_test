const  mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
require("dotenv").config();

const URL = process.env.URL ;

async function mongoDB() {
 
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb+srv://harshadagarwal8058:bO9NuRLEM4CpMMLe@cluster0.bibkzur.mongodb.net/cluster0?retryWrites=true&w=majority", {  useNewUrlParser:true ,useUnifiedTopology:true }, async (err, res) => {
        if (err) {console.log("!!!!!!!!!!", err);}
        else {
            console.log("DataBase Connected ...");
            
        }


    })
  
   
  }

module.exports = mongoDB;