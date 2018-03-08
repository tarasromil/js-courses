import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../Buttons/Button/index';
import Form from '../Form/Component';
import TextInput from "../TextInput/index";
import Header from "../Header/Component";


const ForgotLink = styled.a`
  display: inline-flex;
  align-self: center;
  padding: 10px;
`.withComponent(Link);


const SignIn = ({ username, password, submitReady, onChange, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Header>Sign In</Header>

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

    <ForgotLink to="/restore-password">Forgot password?</ForgotLink>

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
