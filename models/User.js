const mongoose = require('mongoose')

const userSchema = {
  name: { type: String, required: true },
  age: {
    type: Number,
    required: true,
    min: [16, 'You have to be at least 16 years old!'],
  },
  email: { type: String, match: /.+@\{2,}\.\w{2,}/i },
}

module.exports = mongoose.model('User', userSchema)
