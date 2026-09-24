import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: 'Product published successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { marketId, farmerId } = req.query;
    let filter = { isAvailable: true };
    if (marketId) filter.market = marketId;
    if (farmerId) filter.farmer = farmerId;

    const products = await Product.find(filter)
      .populate('farmer', 'name phone')
      .populate('market', 'name location');
      
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};