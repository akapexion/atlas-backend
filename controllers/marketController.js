import Market from '../models/Market.js';

export const createMarket = async (req, res) => {
  try {
    const market = new Market(req.body);
    await market.save();
    res.status(201).json({ message: 'Market created successfully', market });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAllMarkets = async (req, res) => {
  try {
    const markets = await Market.find({ status: 'active' });
    res.status(200).json(markets);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};