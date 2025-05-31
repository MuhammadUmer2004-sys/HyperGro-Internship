import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  location: String,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  amenities: [String],
  images: [String],
  listedDate: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('Property', propertySchema);
