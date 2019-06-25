
module.exports._read = async (id_attrs) => {
	return new Promise(async (resolve) => {
		try {
			const res = await axios.post(disco_url, {
					query: {},
					variables: {
						...id_attrs
					}
				},
				{
					headers: {
						'Content-Type': 'application/json'
					}
				})
			// Response data
			const data = res.data.data
			if (data.person.id) {
				resolve({
					type: 'success',
					msg: 'person_found',
					data: data
				})
			} else {
				resolve({
					type: 'success',
					msg: 'person_not_found',
					data: data
				})
			}
		} catch (err) {
			const error = _error('_query_person_vars() try_catch', err)
			resolve({
				type: 'error',
				msg: error.msg,
				data: error
			})
		}
	})
}



/**
 * @param {{graphql:mutation}} Create and provision person as new user on id_proofed_authenticated_users
 * */
module.exports._create = (id_attrs) => {

}

const body = {
	query: `query Person($email: String!) { person(email: $email) { id identifiers { SSNs { value } emails { value } phoneNumbers { use value } } names { use fullName } postalAddresses { use addressFull } birthDate gender } }`

}


/**
 * @param {{graphql:mutation}} Update person/user on id_proofed_authenticated_users
 * */
module.exports._update = async (id_attrs) => {

}

/**
 * @param {{graphql:mutation}} Delete person/user from id_proofed_authenticated_users
 * */
module.exports._delete = async (id_attrs) => {

}
