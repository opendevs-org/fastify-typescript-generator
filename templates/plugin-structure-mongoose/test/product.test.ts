const mongoose = require('mongoose');
import Product from '../src/modules/products/entity';

describe('Product CRUD', () => {
	let connection;
	let db;

	beforeAll(async () => {
		connection = await mongoose.connect('mongodb://localhost:27017/test_', { useNewUrlParser: true, useUnifiedTopology: true });
		db = mongoose.connection;
		const collection = 'test_product';
		await db.createCollection(collection);
	});

	afterAll(async () => {
		const collection = 'test_product';
		await db.dropCollection(collection);
		await db.dropDatabase();
		await db.close();
		await connection.close();
	});


	test('Add Product', async () => {
		const response = await Product.create({
			_id: '5f2678dff22e1f4a3c0782ee',
			name: 'JBL Headphone',
			category: 'Electronic appliances',
			unit: 1
		});
		expect(response.name).toBe('JBL Headphone');
	});

	test('Get all Products', async () => {
		const response = await Product.find({});
		expect(response.length).toBe(1);
	});

	test('Update Product', async () => {
		const response = await Product.updateOne({ _id: '5f2678dff22e1f4a3c0782ee' }, { unit: 2 });
		expect(response.ok).toBeTruthy();
	});

	test('Product update is correct', async () => {
		const responseTwo = await Product.findOne({ _id: '5f2678dff22e1f4a3c0782ee' });
		expect(responseTwo.unit).toBe(2);
	});

	test('Delete Product DELETE /product/:id', async () => {
		const response = await Product.deleteOne({ _id: '5f2678dff22e1f4a3c0782ee' });
		expect(response.ok).toBe(1);
	});
});
