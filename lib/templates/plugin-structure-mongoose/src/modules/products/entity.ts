import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
	name: { type: String, required: true },
	category: { type: String, required: true },
	unit: { type: Number, required: true }
}, {
	timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});

export default mongoose.model('Product', productSchema);