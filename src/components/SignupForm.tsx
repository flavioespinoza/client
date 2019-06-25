
import React from 'react';
import { PhoneNumber, Email } from '../api/_person/_person.types';
import { PrimaryButton } from 'office-ui-fabric-react';
import { MaskedTextField, TextField } from 'office-ui-fabric-react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import _ from 'lodash'

const log = require('ololog');

interface Props {};

interface State {
	firstName: String | any
	lastName: String | any
	email: Email | any
	mobilePhone: PhoneNumber | any
	value: any
};

interface ParamsPerson {
	email: String
	phoneNumber: String
	name: String
	address: String
	birthDate: String
};

const alertClicked = (): void => {
	alert('Identity Attributes Submitted to the');
};

class SignupForm extends React.Component<Props, State>{
	constructor(props: Props) {
		super(props);
		this.state = {
			firstName: undefined,
			lastName: undefined,
			email: undefined,
			mobilePhone: undefined,
			value: undefined
		};
	}

	private _handleChange(event: any, attr: String) {

	}

	private _handleSubmit(event: any) {
		let alert = event.target
		log.lightRed(alert)
		alert(alert)
		log.yellow('handleSubmit')
	}

	render() {
		const style = {
			input: {
				margin: 4,
				padding: 4,

			},
			btn: {
				margin: 12,
				marginTop: 12
			},
			title: {
				margin: 0
			}
		}

		return (
			<section>
				<form onSubmit={this._handleSubmit}>
					<label>
						<h5 style={style.title}>Enter your informtion to join the AuthNet</h5>
						<div className={'id_attr--submit'}>
							<Stack>

								<TextField
									placeholder="first name"
									onChange={(e) => {
										this._handleChange(e, 'firstName')
									}}
								/>

								<TextField
									placeholder="last name"
									onChange={(e) => {
										this._handleChange(e, 'lastName')
									}} 
								/>

								<TextField
									placeholder="email"
									onChange={(e) => {
										this._handleChange(e, 'email')
									}}
								/>

								<MaskedTextField
									mask="(999) 999 9999"
									onChange={(e) => {
										this._handleChange(e, 'mobile')
									}}
								/>

							</Stack>
						</div>
					</label>
					<PrimaryButton style={style.btn} onClick={(e) => {
						alertClicked()
					}} >SUBMIT</PrimaryButton>
				</form>
			</section>
		);
	}
}

export default SignupForm