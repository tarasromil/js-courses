import React from 'react';
import TextInput from "../TextInput/TextInput";
import Button from "../Buttons/Button/index";
import FormHeader from "../Header/Component";
import Form from "../Form/Component";


const SignUp = ({ onSubmit, submitReady, onChange, oldPassword, newPassword }) => (
  <Form onSubmit={onSubmit}>
    <FormHeader>Restore Password</FormHeader>

    <TextInput
      autoFocus
      value={oldPassword}
      name="oldPassword"
      type="password"
      placeholder="Old password"
      onChange={onChange('oldPassword')}
    />

    <TextInput
      value={newPassword}
      name="newPassword"
      type="password"
      placeholder="New password"
      onChange={onChange('newPassword')}
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
