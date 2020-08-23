import Product from '../modules/products/entity';

export const getAllProducts = async () => {
	try {
		return await Product.find({});
	} catch (err) {
		throw err;
	}
};

export const getOneProduct = async (id) => {
	try {
		return await Product.findOne({ _id: id });
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

export const updateProduct = async (id, data) => {
	try {
		return await Product.updateOne({_id: id}, data);
	} catch (err) {
		throw err;
	}
};

export const deleteProduct = async (id) => {
	try {
		return await Product.deleteOne({_id: id});
	} catch (err) {
		throw err;
	}
};