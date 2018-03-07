import React from 'react';
import TextInput from "../Form/TextInput/TextInput";
import Button from "../Buttons/Button/index";
import Header from "../Header/Component";
import Form from "../Form/Component";


const SignUp = ({ onSubmit, submitReady, onChange, username, password, email }) => (
  <Form onSubmit={onSubmit}>
    <Header>Sign Up</Header>

    <TextInput
      autoFocus
      value={username}
      name="username"
      placeholder="Username"
      onChange={onChange('username')}
    />

    <TextInput
      value={email}
      name="email"
      type="email"
      placeholder="Email"
      onChange={onChange('email')}
    />

    <TextInput
      value={password}
      name="password"
      type="password"
      placeholder="Password"
      onChange={onChange('password')}
    />

    <Button
      primary
      type="submit"
      disabled={!submitReady}
    >
      Sign Up
    </Button>
  </Form>
);


export default SignUp;
