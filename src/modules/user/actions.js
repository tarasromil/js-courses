import { userTypes } from './';

const signIn = user => ({
  type: userTypes.SIGN_IN,
  value: user,
});

export default { signIn };