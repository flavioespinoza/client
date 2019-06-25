import React, { PureComponent } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import _ from 'lodash'

const QueryPerson = gql``

interface Props {
	name: String
	email: String
}

interface State {

}

class PersonProfile extends PureComponent<Props, State>{
	constructor(props: Props) {
		super(props)
		this.state = {
			email: props.email
		}
	}
	render() {
		return {}
	}
}

export default graphql(gql`{

}`, {
	options: (props) => {
		const id_attrs = {}
		// _.map(props, (_attr) => {
		// 		if (_attr.values.length > 0) {
					
		// 		}
		// })
		return {
			variables: {
				...id_attrs
			}
		}
	}
})(QueryPerson)