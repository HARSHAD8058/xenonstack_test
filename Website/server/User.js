const  mongoose = require('mongoose');
const {Schema }= mongoose;

 const UserData = new Schema({
   
    email:{
        type:String,
        required :true
    }
    ,password:{
        type:String,
        required :true
    }
    
})
module.exports = mongoose.model('user' , UserData);