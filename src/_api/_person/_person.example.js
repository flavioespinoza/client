const _user = {
	_name: 'user',
	_desc: 'graphql query person response object',
	_data_type: 'JSON',
	_meta_data: {},
	_data_model: {
		_type: 'graphql',
		_schema: './app/server/_ado/_person.schema.gql'
	},
	_example_data: {
		dn: 'uid=user.15,ou=People,dc=example,dc=com',
		attributes: [
			{
				name: 'mail', //TODO: This needs to change to `email`
				values: ['user.15@example.com']
			},
			{
				name: 'homePhone',
				values: ['+1 197 576 3730']
			},
			{
				name: 'givenName',
				values: ['Jen']
			},
			{
				name: 'mobile',
				values: ['+1 279 019 3087']
			},
			{
				name: 'sn',
				values: ['Grimm']
			},
			{
				name: 'cn',
				values: ['Jen Grimm']
			},
			{
				name: 'street',
				values: ['30650 Cherry Street']
			},
			{
				name: 'st',
				values: ['WV']
			},
			{
				name: 'postalAddress',
				values: ['Jen Grimm$30650 Cherry Street$Pensacola, WV  06057']
			},
			{
				name: 'l',
				values: ['Pensacola']
			},
			{
				name: 'postalCode',
				values: ['06057']
			}
		]
	}
}

const _users = {
	_name: 'users',
	_desc: 'stream (array?) of ado._person data objects',
	_data_type: 'JSON',
	_meta_data: {},
	_data_model: {
		_type: '',
		_schema: ''
	},
	_example_data: [
		{
			dn: 'uid=user.13,ou=People,dc=example,dc=com',
			attributes: [
				{
					name: 'mail',
					values: ['user.13@example.com']
				},
				{
					name: 'homePhone',
					values: ['+1 876 813 3821']
				},
				{
					name: 'givenName',
					values: ['Oona']
				},
				{
					name: 'mobile',
					values: ['+1 063 373 1605']
				},
				{
					name: 'sn',
					values: ['Waugh']
				},
				{
					name: 'cn',
					values: ['Oona Waugh']
				},
				{
					name: 'street',
					values: ['54379 Walnut Street']
				},
				{
					name: 'st',
					values: ['NJ']
				},
				{
					name: 'postalAddress',
					values: ['Oona Waugh$54379 Walnut Street$Anchorage, NJ  80761']
				},
				{
					name: 'l',
					values: ['Anchorage']
				},
				{
					name: 'postalCode',
					values: ['80761']
				}
			]

		},
		{
			dn: 'uid=user.14,ou=People,dc=example,dc=com',
			attributes: [
				{
					name: 'mail',
					values: ['user.14@example.com']
				},
				{
					name: 'homePhone',
					values: ['+1 213 004 6282']
				},
				{
					name: 'givenName',
					values: ['Halimeda']
				},
				{
					name: 'mobile',
					values: ['+1 950 722 0062']
				},
				{
					name: 'sn',
					values: ['Communication']
				},
				{
					name: 'cn',
					values: ['Halimeda Communication']
				},
				{
					name: 'street',
					values: ['80168 Seventh Street']
				},
				{
					name: 'st',
					values: ['MD']
				},
				{
					name: 'postalAddress',
					values: ['Halimeda Communication$80168 Seventh Street$Mason City, MD  05644']
				},
				{
					name: 'l',
					values: ['Mason City']
				},
				{
					name: 'postalCode',
					values: ['05644']
				}
			]
		},
		{
			dn: 'uid=user.15,ou=People,dc=example,dc=com',
			attributes: [
				{
					name: 'mail',
					values: ['user.15@example.com']
				},
				{
					name: 'homePhone',
					values: ['+1 197 576 3730']
				},
				{
					name: 'givenName',
					values: ['Jen']
				},
				{
					name: 'mobile',
					values: ['+1 279 019 3087']
				},
				{
					name: 'sn',
					values: ['Grimm']
				},
				{
					name: 'cn',
					values: ['Jen Grimm']
				},
				{
					name: 'street',
					values: ['30650 Cherry Street']
				},
				{
					name: 'st',
					values: ['WV']
				},
				{
					name: 'postalAddress',
					values: ['Jen Grimm$30650 Cherry Street$Pensacola, WV  06057']
				},
				{
					name: 'l',
					values: ['Pensacola']
				},
				{
					name: 'postalCode',
					values: ['06057']
				}
			]
		}
	]
}


module.exports = {
	example_data: (name) => {
		if (name === 'person' || name === 'user') {
			return _person._example_data
		}
		if (name === 'users') {
			return _users._example_data
		}
	}
}

