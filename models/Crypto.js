const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  symbol: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  change24h: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // This will automatically add createdAt, useful for 'New Listings'
});

module.exports = mongoose.model('Crypto', cryptoSchema);
