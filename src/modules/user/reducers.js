import { userTypes } from './';

const defaultState = {
  user: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN:
      return action.value;
    default:
      return state;
  }
};
