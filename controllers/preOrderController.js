import PreOrder from '../models/PreOrder.js';

export const createPreOrder = async (req, res) => {
  try {
    const { customer, farmer, market, items, totalAmount } = req.body;
    
    const preOrder = new PreOrder({ customer, farmer, market, items, totalAmount });
    await preOrder.save();

    res.status(201).json({ message: 'Pre-order placed successfully', preOrder });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getPreOrders = async (req, res) => {
  try {
    const { userId, role } = req.query;
    let filter = {};
    if (role === 'customer') filter.customer = userId;
    if (role === 'farmer') filter.farmer = userId;

    const orders = await PreOrder.find(filter)
      .populate('customer', 'name phone email')
      .populate('items.product', 'name price unit');

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};