import { listProductsSchema, deleteProductSchema } from './schema';

export default function productHandler(server, options, next) {
	server.get(
		'/',
		{ schema: listProductsSchema },
		async (req, res) => {
			req.log.info('list products from db');
			const products = await server.db.products.find();
			res.send(products);
		}
	);

	server.get('/:_id', async (req, res) => {
		req.log.info('get one products from db');
		const product = await server.db.products.findOne(req.params._id);
		res.send(product);
	});

	server.post('/', async (req, res) => {
		req.log.info('Add products to db');
		const products = await server.db.products.save(req.body);
		res.status(201).send(products);
	});

	server.put('/:_id', async (req, res) => {
		req.log.info('Update product to db');
		const _id = req.params._id;
		const products = await server.db.products.save({ _id, ...req.body });
		res.status(200).send(products);
	});

	server.delete(
		'/:_id',
		{ schema: deleteProductSchema },
		async (req, res) => {
			req.log.info(`delete product ${req.params._id} from db`);
			const product = await server.db.products.findOne(req.params._id);
			await server.db.products.remove(product);
			res.code(200).send({});
		}
	);

	next();
}
