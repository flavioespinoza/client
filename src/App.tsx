import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrimaryButton } from 'office-ui-fabric-react';
import axios from 'axios'

import SignupForm from './components/SignupForm'

const log = require('ololog')

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">

				<SignupForm />

				<div>

					<h5>Login to the AuthNet with OpenID Connect</h5>

					<PrimaryButton
						data-automation-id="test"
						disabled={false}
						checked={false}
						text="OpenID Connect"
						onClick={() => {
							log.yellow('OpenID Connect Authorization Code Flow')
						}}
						allowDisabledFocus={true}
					/>

				</div>
			</header>
		</div>
	);
}

export default App;
