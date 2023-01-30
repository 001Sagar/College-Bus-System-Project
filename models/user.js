const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    faculty:{
        type:String,
        required:true,
        unique:true
    }
    
})
const user = mongoose.model('user',UserSchema);
module.exports = user;