import Product from '../models/product';

export const getAllProducts = async () => {
	try {
		return await Product.find({});
	} catch (err) {
		throw err;
	}
};

export const getOneProduct = async (_id) => {
	try {
		return await Product.findOne({ _id });
	} catch (err) {
		throw err;
	}
};

export const createProduct = async (data) => {
	try {
		return await Product.create(data);
	} catch (err) {
		throw err;
	}
};

export const updateProduct = async (_id, data) => {
	try {
		return await Product.updateOne({ _id }, data);
	} catch (err) {
		throw err;
	}
};

export const deleteProduct = async (_id) => {
	try {
		return await Product.deleteOne({ _id });
	} catch (err) {
		throw err;
	}
};