import { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } from '../dao/index';

async function routes (fastify) {

	fastify.get('/', async (req, res) => {
		req.log.info('list products from db');
		const products = await getAllProducts();
		res.status(200).send(products);
	});

	fastify.get('/:id', async (req, res) => {
		req.log.info('Get one product from db');
		const id = req.params.id;
		const products = await getOneProduct(id);
		res.status(200).send(products);
	});

	fastify.post('/', async (req, res) => {
		req.log.info('Add products to db');
		const products = await createProduct(req.body);
		res.status(201).send(products);
	});

	fastify.put('/:id', async (req, res) => {
		req.log.info('Update product to db');
		const id = req.params.id;
		const products = await updateProduct(id, req.body);
		res.status(200).send(products);
	});

	fastify.delete('/:id', async (req, res) => {
		req.log.info(`delete product ${req.params.id} from db`);
		const id = req.params.id;
		await deleteProduct(id);
		res.code(200).send('OK');
	});

}

module.exports = routes;
