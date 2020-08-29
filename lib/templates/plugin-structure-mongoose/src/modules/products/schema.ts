export const productSchema = {
	_id: { type: 'string', format: 'uuid' },
	name: { type: 'string' },
	unit: { type: 'number' },
	category: { type: 'string' },
	created_at: { type: 'string', format: 'date-time' },
	updated_at: { type: 'string', format: 'date-time' }
};

export const listProductsSchema = {
	summary: 'products',
	description: 'products',
	response: {
		200: {
			type: 'array',
			items: {
				properties: productSchema
			}
		}
	}
};

export const deleteProductSchema = {
	summary: 'delete product',
	description: 'delete product',
	params: {
		type: 'object',
		required: ['_id'],
		properties: {
			_id: { type: 'string' }
		}
	},
	response: {
		200: {
			type: 'boolean'
		}
	}
};
