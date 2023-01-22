const dotenv = require('dotenv').config()

const urlDb = process.env.MONGO_URL
module.exports = urlDb

