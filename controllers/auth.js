const { resolveSoa } = require('dns');
const HomeRouter = require('../routes/auth.js')
const User = require('../models/user.js');
const bcrypt = require('bcrypt');



module.exports.Register = async function(req,res){
    try {
      const new_user =  new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        faculty:req.body.faculty
      })  
      const user = await new_user.save();
      return res.status(200).json({
        message:"Registered Succssfully",
        user
      })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

module.exports.login = async function(req,res){
    try {
       const user = await User.findOne({
        name:req.body.name
       })
      if(!user){
        return res.status(404).json('User is not found');
      } 
      if(user.password != req.body.password){
        return res.status(401).json('Wrong Password')
      }
      console.log(user);
      return res.status(200).json(user)
    } catch (e) {
        console.log(e);
        return res.status(500).json(e)
    }
}

module.exports.update = async function(req,res){
    try {
        const user = await User.findOne({
            name:req.body.name
        })
        if(!user){
            return res.status(404).json('User is not found')
          } 
          if(user.password != req.body.password){
            return res.status(401).json('Wrong Password')
          }
       const newpassword = req.body.newpassword
     const updateduser = await User.findByIdAndUpdate(user._id,{ 
          password:newpassword
     }) 
     console.log(updateduser);
     return res.status(200).json({
        message:"Updated Successfully",
        updateduser
     })
    } catch (error) {
        console.log(e);
        return res.status(500).json(e)
    }
}


module.exports.delete = async function(req,res){
    try {
      const user = await User.findOne({
        name:req.body.name
      })  
      if(!user){
        return res.status(404).json('User is not found')
      }
      if(user.password != req.body.password){
        return res.status(401).json('Wrong Password')
      }
   const del = await User.findByIdAndDelete(user._id,{
    id:user._id
   })   
   return res.status(200).json({
    message:"Deleted Successfully",
    del
 })
    } catch (error) {
      console.log(e);
      return res.status(200).json(e);
    }
}