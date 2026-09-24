import Review from '../models/Review.js';

export const createReview = async (req, res) => {
  try {
    const { customer, farmer, rating, comment } = req.body;

    const review = new Review({ customer, farmer, rating, comment });
    await review.save();

    res.status(201).json({ message: 'Review added successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getFarmerReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ farmer: req.params.farmerId }).populate('customer', 'name');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};