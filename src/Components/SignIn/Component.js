import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons/Button/index';
import Form from '../Form/Component';
import TextInput from "../Form/TextInput/index";
import FormHeader from "../Header/Component";


const ForgotLink = styled.a`
  display: inline-flex;
  padding: 10px;
`;


const SignIn = ({ username, password, submitReady, onChange, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <FormHeader>Sign In</FormHeader>

    <TextInput
      autoFocus
      value={username}
      name="username"
      placeholder="Username"
      onChange={onChange('username')}
    />

    <TextInput
      value={password}
      name="password"
      type="password"
      placeholder="Password"
      onChange={onChange('password')}
    />

    <ForgotLink href="/restore-password">Forgot password?</ForgotLink>

    <Button
      primary
      type="submit"
      disabled={!submitReady}
    >
      Sign In
    </Button>
  </Form>
);


export default SignIn;
