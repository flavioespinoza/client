require('dotenv').config()

const axios = require('axios')
const log = require('ololog')
const _error = require('../../_helpers/_utils')._error
const disco_url = process.env.URI_DISCO

/**
 * @param {{graphql:http}} endpoints graphql
 * */
const endpoints = {
	create: {
		name: 'person_create',
		method: 'POST',
		url: 'https://as-ingest-webshield.resilient-networks.com:/publish/v1/person',
		graphql_method: 'mutation',
		pretty_name: 'Create person',
		description: 'Publish a person as a new person upon identity_proof and identity_auth'
	},
	update: {
		name: 'person_update',
		method: 'POST',
		url: 'https://as-ingest-webshield.resilient-networks.com:/publish/v1/person',
		graphql_method: 'mutation',
		pretty_name: 'Update person',
		description: 'Publish a person as a new person upon identity_proof and identity_auth',
	},
	delete: {
		name: 'person_delete',
		method: 'POST',
		url: 'https://as-ingest-webshield.resilient-networks.com:/publish/v1/person',
		graphql_method: 'mutation',
		pretty_name: 'Delete person',
		description: 'Publish a person as a new person upon identity_proof and identity_auth',
	},
	read: {
		name: 'person_read',
		method: 'POST',
		url: 'https://ds-webshield.resilient-networks.com/v1/graphql',
		graphql_method: 'query',
		pretty_name: 'Find person',
		description: 'Query a person belonging to the AuthNet with person supplied identity_attribuites such as email, mobile_phone, first_name, last_name, ect...',
		query: person_query
	}
}
