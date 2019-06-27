import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrimaryButton } from 'office-ui-fabric-react';
import { Route, Switch } from 'react-router-dom';

import SignupForm from './components/SignupForm'
import PersonGraph from './components/PersonGraph'
import OpenID from './components/OpenID'

import { Link } from 'react-router-dom';

const log = require('ololog')

class App extends React.Component {
	render() {
		const App = () => (
			<div className="App">
				<header className="App-header">
					<Switch>
						<Route exact path='/' component={SignupForm} />
						{/* <Route path='/list' component={List}/> */}
						<Route path='/person_graph' component={PersonGraph} />
						<Route path='/openid' component={() => {
							window.location.href = 'https://qatest.resilient-networks.com/openId/authenticate?response_type=code&client_id=067571001126669&redirect_uri=http://localhost:6001/openIdClient/redirect&scope=admin user openid email profile&state=7889d301-ae4b-4001-89b7-07127fb58bba&nonce=1561371652329';
							return null;
						}} />
					</Switch>
				</header>
			</div>
		)
		return (
			<Switch>
				<App />
			</Switch>
		);
	}
}

export default App;
