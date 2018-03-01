import React from 'react';

import Button from '../Components/Buttons/Button';
import Form from '../Components/Form';
import TextInput from "../Components/Form/TextInput";
import FormHeader from "../Components/Form/FormHeader";


const submitNotReady = errors => Object.values(errors).some(err => err);


const initialState = {
  username: '',
  password: '',
  errors: {
    username: true,
    password: true,
  },
};


class SignIn extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = initialState;
  }
  
  onChange(event) {
    const { value, name } = event.target;
    
    const errors = {
      ...this.state.errors,
      [name]: !(value.length > 0 && value.length < 15),
    };

    this.setState({ [name]: value, errors });
  }

  onSubmit() {
    const { username, password, errors } = this.state;
    if (!submitNotReady(errors)) {
      this.props.onUserChange({ username, password, id: 1 });

      this.setState(initialState);
    }
  }

  render() {
    const { username, password, errors } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormHeader>Sign In</FormHeader>

        <TextInput
          autoFocus
          value={username}
          name="username"
          onChange={this.onChange}
        />

        <TextInput
          value={password}
          name="password"
          type="password"
          onChange={this.onChange}
        />

        <Button
          primary
          type="submit"
          disabled={submitNotReady(errors)}
        >
          Sign In
        </Button>
      </Form>
    )
  }
}


export default SignIn;
