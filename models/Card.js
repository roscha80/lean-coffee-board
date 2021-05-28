const mongoose = require('mongoose')

const cardSchema = {
  text: String,
  author: String,
  votes: Number,
}

module.exports = mongoose.model('Card', cardSchema)
