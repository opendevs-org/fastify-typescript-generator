import { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } from '../dao/index';

async function routes(fastify) {

	fastify.get('/', async (req, res) => {
		req.log.info('list products from db');
		const products = await getAllProducts();
		res.status(200).send(products);
	});

	fastify.get('/:_id', async (req, res) => {
		req.log.info('Get one product from db');
		const products = await getOneProduct(req.params._id);
		res.status(200).send(products);
	});

	fastify.post('/', async (req, res) => {
		req.log.info('Add products to db');
		const products = await createProduct(req.body);
		res.status(201).send(products);
	});

	fastify.put('/:_id', async (req, res) => {
		req.log.info('Update product to db');
		const products = await updateProduct(req.params._id, req.body);
		res.status(200).send(products);
	});

	fastify.delete('/:_id', async (req, res) => {
		req.log.info(`delete product ${req.params._id} from db`);
		await deleteProduct(req.params._id);
		res.code(200).send('OK');
	});

}

module.exports = routes;
