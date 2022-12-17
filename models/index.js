require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
// for more information https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1

module.exports.Place = require('./places')

