
import React from 'react';
import { Context } from 'vm';
import { PhoneNumber, Email } from '../api/_person/_person.types';

interface Props {
	firstName: String
	lastName: String
	email: Email
	mobilePhone: PhoneNumber
}

interface State {
	firstName: String
	lastName: String
	email: Email
	mobilePhone: PhoneNumber,
	value: any
}

class SignupForm extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
			firstName: props.firstName,
			lastName: props.lastName,
			email: props.email,
			mobilePhone: props.mobilePhone,
			value: null
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:Context) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event:Context) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}