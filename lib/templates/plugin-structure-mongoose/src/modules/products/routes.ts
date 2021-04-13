import { listProductsSchema, deleteProductSchema } from './schema';
import { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } from '../../dao/index';

export default function productHandler(server, options, next) {
	server.get(
		'/',
		{ schema: listProductsSchema },
		async (req, res) => {
			req.log.info('list products from db');
			const products = await getAllProducts();
			res.send(products);
		}
	);

	server.get('/:_id', async (req, res) => {
		req.log.info('get one products from db');
		const products = await getOneProduct(req.params._id);
		res.status(200).send(products);
	});

	server.post('/', async (req, res) => {
		req.log.info('Add products to db');
		const products = await createProduct(req.body);
		res.status(201).send(products);
	});

	server.put('/:_id', async (req, res) => {
		req.log.info('Update product to db');
		const products = await updateProduct(req.params._id, req.body);
		res.status(200).send(products);
	});

	server.delete(
		'/:_id',
		{ schema: deleteProductSchema },
		async (req, res) => {
			req.log.info(`delete product ${req.params._id} from db`);
			await deleteProduct(req.params._id);
			res.code(200).send('OK');
		}
	);

	next();
}
