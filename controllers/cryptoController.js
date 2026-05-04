const Crypto = require('../models/Crypto');

exports.getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find();
    res.json(cryptos);
  } catch (error) {
    console.error('Get all cryptos error:', error);
    res.status(500).json({ message: 'Server error fetching cryptocurrencies.' });
  }
};

exports.getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find().sort({ change24h: -1 });
    res.json(gainers);
  } catch (error) {
    console.error('Get top gainers error:', error);
    res.status(500).json({ message: 'Server error fetching top gainers.' });
  }
};

exports.getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find().sort({ createdAt: -1 });
    res.json(newListings);
  } catch (error) {
    console.error('Get new listings error:', error);
    res.status(500).json({ message: 'Server error fetching new listings.' });
  }
};

exports.addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || price === undefined || !image || change24h === undefined) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const crypto = new Crypto({ name, symbol, price, image, change24h });
    await crypto.save();

    res.status(201).json({ message: 'Cryptocurrency added successfully.', crypto });
  } catch (error) {
    console.error('Add crypto error:', error);
    res.status(500).json({ message: 'Server error adding cryptocurrency.' });
  }
};
