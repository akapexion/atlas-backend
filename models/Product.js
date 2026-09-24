import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  market: { type: mongoose.Schema.Types.ObjectId, ref: 'Market', required: true },
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  unit: { type: String, required: true },
  stockQuantity: { type: Number, required: true, min: 0, default: 0 },
  isAvailable: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Product', productSchema);