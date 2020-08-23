import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import { Product } from '../models/index';

async function db (server) {
	try {
		const connectionOptions = await getConnectionOptions();
		Object.assign(connectionOptions, {
			options: { encrypt: true },
			entities: [Product]
		});

		const connection = await createConnection(connectionOptions);
		console.log('database connected');

		server.decorate('db', {
			products: connection.getRepository(Product)
		});
    
	} catch (error) {
		console.log(error);
		console.log('make sure you have set .env variables - see .env.sample');
	}
}

module.exports = db;
