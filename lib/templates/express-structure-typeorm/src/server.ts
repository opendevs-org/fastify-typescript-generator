const fastify = require('fastify')();
const db = require('../src/config/db');

const createServer  = async () => {

	await db(fastify);

	await fastify.register(require('fastify-cors'));
  
	await fastify.register(require('../src/routes/health'), { prefix: '/health' });
	await fastify.register(require('../src/routes/product'), { prefix: '/product' });

	fastify.setErrorHandler((error, req, res) => {
		req.log.error(error.toString());
		res.send({ error });
	});

	return fastify;
};

module.exports = createServer;
