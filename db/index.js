const mongoose  = require("mongoose")

const urlDB  = require('../config')
mongoose.set("strictQuery", false);
mongoose.connect(urlDB,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
},err=>{
  if(err) throw err;
  console.log('Connected Mongo')
})

const db = mongoose.connection

module.exports = db