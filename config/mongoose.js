const { syncBuiltinESMExports } = require('module');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/BusPass');

const db = mongoose.connection;

db.on('err',console.error.bind(console,'error in connecting to mongoDB'));

db.once('open',function(){
    console.log('server is connected to MongoDB::Database');
})

module.exports = db;