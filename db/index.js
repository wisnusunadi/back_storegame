const mongoose  = require("mongoose")

const configdb  = require('../config')
mongoose.set("strictQuery", false);
mongoose.connect(configdb.urlDb,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
},err=>{
  if(err) throw err;
  console.log('Connected Mongo')
})

const db = mongoose.connection

module.exports = db