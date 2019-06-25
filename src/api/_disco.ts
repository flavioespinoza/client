import dotenv from 'dotenv'
dotenv.config()

/**
 * CRUD endpoints
 * */
const _create = {
	name: 'create',
	method: 'POST',
	url: 'https://as-ingest-webshield.resilient-networks.com:/publish/v1/person',
	graphql_method: 'mutation',
	pretty_name: 'Create person',
	description: 'Publish a person as a new person upon identity_proof and identity_auth'
}

const _read = {
	name: 'read',
	method: 'POST',
	url: 'https://ds-webshield.resilient-networks.com/v1/graphql',
	graphql_method: 'query',
	pretty_name: 'Find person',
	description: 'Query a person belonging to the AuthNet with person supplied identity_attribuites such as email, mobile_phone, first_name, last_name, ect...',
}

const _update = {
	name: 'upudate',
	method: 'POST',
	url: 'https://as-ingest-webshield.resilient-networks.com:/publish/v1/person',
	graphql_method: 'mutation',
	pretty_name: 'Update person',
	description: 'Publish a person as a new person upon identity_proof and identity_auth',
}

const _delete = {
	name: 'delete',
	method: 'POST',
	url: 'https://as-ingest-webshield.resilient-networks.com:/publish/v1/person',
	graphql_method: 'mutation',
	pretty_name: 'Delete person',
	description: 'Publish a person as a new person upon identity_proof and identity_auth',
}

export default async (method_name: string) => {
	if (method_name === 'create') {
		return _create
	}
	if (method_name === 'read') {
		return _read
	}
	if (method_name === 'update') {
		return _update
	}
	if (method_name === 'delete') {
		return _delete
	}
}