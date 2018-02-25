import React from 'react';
import Button from '../Components/Buttons/Button';
import { withRouter } from "../utils";


const submitNotReady = errors => Object.values(errors).some(err => err);


class SignIn extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      username: 'Bob',
      password: 'secret',
      errors: {
        username: false,
        password: false,
      }
    };
  }

  onChange(event) {
    const { value, name } = event.target;

    const errors = {
      ...this.state.errors,
      [name]: value.length > 10
    };

    this.setState({ [name]: value, errors });
  }

  onSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state;

    this.props.onUserChange({ username, password });
    this.props.go('/');
  }

  render() {
    return (
      <div>
        <h2>Sign In</h2>

        <form onSubmit={this.onSubmit}>
          <div>
            <input value={this.state.username} name="username" type="text" onChange={this.onChange} />
          </div>

          <div>
            <input value={this.state.password} name="password" type="password" onChange={this.onChange}/>
          </div>

          <div>
            <Button
              disabled={submitNotReady(this.state.errors)}
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    )
  }
}


export default withRouter(SignIn);
