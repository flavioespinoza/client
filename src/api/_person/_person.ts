import axios from 'axios'
import { PhoneNumberUse } from './_person.types';
import { socket } from '../socket.action'

socket.on('balls', (balls: any) => {
		console.log('BALLS', balls)
})

interface QueryParams {
	email: string | undefined
	phoneNumber: string | undefined
	name: string | undefined
	[key: string]: string | undefined
}

// let ds_url = 'https://ds-webshield.resilient-networks.com/v1/graphql'
let ds_url = 'http://localhost:6001/'
let body = {
	query: `query Person($email: String!) { person(email: $email) { id identifiers { SSNs { value } emails { value } phoneNumbers { use value } } names { use fullName } postalAddresses { use addressFull } birthDate gender } }`
}

const _queryPerson = async (id_attrs: QueryParams) => {

	socket.emit('query_person', {param: id_attrs})

	// return new Promise(async (resolve) => {
	// 	try {
	// 		const res = await axios.post(ds_url, {
	// 				query: `query Person($email: String!) {
	// 						person(email: $email) {
	// 							id
	// 							identifiers {
	// 								SSNs {
	// 									value
	// 								}
	// 								emails {
	// 									value
	// 								}
	// 								phoneNumbers {
	// 									use
	// 									value
	// 								}
	// 							}
	// 							names {
	// 								use
	// 								fullName
	// 							}
	// 							postalAddresses {
	// 								use
	// 								addressFull
	// 							}
	// 							birthDate
	// 							gender
	// 						}
	// 					}`
	// 				,
	// 				variables: {
	// 					...id_attrs
	// 				}
	// 			},
	// 			{
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					'Access-Control-Allow-Origin': '*'
	// 				}
	// 			})
	// 		// Response data
	// 		const data = res.data.data
	// 		if (data.person.id) {
	// 			resolve({
	// 				type: 'success',
	// 				msg: 'person_found',
	// 				data: data
	// 			})
	// 		} else {
	// 			resolve({
	// 				type: 'success',
	// 				msg: 'person_not_found',
	// 				data: data
	// 			})
	// 		}
	// 	} catch (err) {
	// 		const error = new Error(err)
	// 		resolve({
	// 			type: 'error',
	// 			msg: error.message,
	// 			data: error
	// 		})
	// 	}
	// })
}

export default _queryPerson

