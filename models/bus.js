const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
    busnumber:{
        type:Number,
        required:true,
        unique:true
    },
     sheetnumber:{
        type:Number,
        required:true,
        unique:true
     },
      Destination:{
        type:String,
        required:true,
        unique:true
    },
    AvilableSheet:{
        type:Number,
        required:true,
        unique:true
    }
})
const BUS = mongoose.model('BUS' , BusSchema);
module.exports = BUS;