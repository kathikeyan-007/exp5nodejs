const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/userlogin");
connect.then(()=>{
    console.log("DB CONNECTED");
})
.catch(()=>{
    console.log("DB NOT CONNECTED");
})
const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});
const collection = new mongoose.model("login",LoginSchema);
module.exports = collection;