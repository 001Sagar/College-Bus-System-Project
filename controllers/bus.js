const busController = require('../routes/busroute.js');

const Bus = require('../models/bus.js')
const bcrypt = require('bcrypt');



module.exports.book = async function(req,res){
    try {
     const new_bus = await new Bus({
        busnumber:req.body.busnumber,
        sheetnumber:req.body.sheetnumber,
        Destination:req.body.Destination,
        AvilableSheet:req.body.AvilableSheet
     })  
     const bus = await new_bus.save();
     console.log(bus);
     return res.status(200).json(bus)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}


module.exports.check = async function(req,res){
    try {
       const bus = await Bus.findOne({
         busnumber:req.body.busnumber,
         sheetnumber:req.body.sheetnumber,
       }) 
       if(!bus){
        return res.status(500).json('Bus is not found')
       }
    //    const sheet = await Bus.findOne({
    //     sheetnumber:req.body.sheetnumber,
    //   }) 
    //   if(!sheet){
    //    return res.status(500).json('sheet is not found')
    //   }
       return res.status(200).json(bus)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

module.exports .delete = async function(req,res){
    try {
        const bus = await Bus.findOne({
            busnumber:req.body.busnumber,
            sheetnumber:req.body.sheetnumber,
          }) 
          if(!bus){
           return res.status(500).json('Bus is not found')
          }
        const del = await Bus.findByIdAndDelete(bus._id,{
           id:bus._id
        })
        console.log(del);
        return res.status(200).json({
            messgae:"Delete Successfully",
            del
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}