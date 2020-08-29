async function routes (fastify) {

	fastify.get('/', async (req, res) => {
		res.status(200).send('OK');
	});

}

module.exports = routes;