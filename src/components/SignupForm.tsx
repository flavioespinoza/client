
import React from 'react'
import { PrimaryButton } from 'office-ui-fabric-react'
import { MaskedTextField, TextField } from 'office-ui-fabric-react'
import { Stack } from 'office-ui-fabric-react/lib/Stack'
import _ from 'lodash'

import _queryPerson from '../api/_person/_person'

const log = require('ololog')

interface Props {}

interface State {
	email: string | undefined
	phoneNumber: string | undefined
	firstName: string | undefined
	lastName: string | undefined
	[key: string]: string | undefined
}

interface Params {
	email: string | undefined
	phoneNumber: string | undefined
	firstName: string | undefined
	lastName: string | undefined
	[key: string]: string | undefined
}

class SignupForm extends React.Component<Props, State>{
	constructor(props: Props) {
		super(props)
		this.state = {
			firstName: undefined,
			lastName: undefined,
			email: undefined,
			phoneNumber: undefined
		}
	}

	private _handleChange(e: any, attr: string) {
		let params: Params = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email:  this.state.email,
			phoneNumber: this.state.phoneNumber
		}
		params[attr] = e.target.value
		this.setState(params)
	}

	private _onSubmit(e: any) {
		let str = this.state.phoneNumber
		let mobile = ''
		if (typeof str === 'string') {
			mobile = str.slice(0, -1)
		}
		let params: Params = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email:  this.state.email,
			phoneNumber: mobile
		}
		console.log(params)

		this._queryPerson(params)
		
	}

	private async _queryPerson (attrs: Params) {
		let name = ''
		if (typeof attrs.firstName === 'string' && typeof attrs.lastName === 'string' && typeof attrs.email === 'string'  && typeof attrs.phoneNumber === 'string') {
			name = `${attrs.firstName} ${attrs.lastName}`
			
			let _params  = {
				name: name,
				email: attrs.email,
				phoneNumber: attrs.phoneNumber
			}

			let _params_test  = {
				name: 'robert m jones',
				email: 'bob@jonesfamily.com',
				phoneNumber: '702-222-2222'
			}

			const person = await _queryPerson(_params)
			
			console.log(person)

		}

	}

	render() {
		const style = {
			input: {
				margin: 4,
				padding: 4,

			},
			btn: {
				margin: 12,
				marginTop: 24
			},
			title: {
				margin: 0
			}
		}

		return (
			<section>
				<div>
					<label>
						<h5 style={style.title}>Enter your informtion to join the AuthNet</h5>
						<div className={'id_attr--submit'}>
							<Stack>

								<TextField
									label={'First name'}
									placeholder="First name"
									onChange={(e) => {
										this._handleChange(e, 'firstName')
									}}
								/>

								<TextField
									label={'Last name'}
									placeholder="Last name"
									value={this.state.lastName}
									onChange={(e) => {
										this._handleChange(e, 'lastName')
									}} 
								/>

								<TextField
									label={'Email'}
									placeholder="Email"
									onChange={(e) => {
										this._handleChange(e, 'email')
									}}
								/>

								<MaskedTextField
									label={'Mobile phone'}
									maskFormat={{['9']: /[0-9]/}}
									mask="999-999-9999"
									onChange={(e) => {
										this._handleChange(e, 'phoneNumber')
									}}
								/>

							</Stack>
						</div>
					</label>
					<PrimaryButton style={style.btn} onClick={this._onSubmit.bind(this)} >JOIN</PrimaryButton>
				</div>
			</section>
		)
	}
}

export default SignupForm