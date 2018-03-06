import { compose, withHandlers } from 'recompose';
import { withInputs } from 'custom-hoc';
import Component from './Component';


const enhance = compose(
  withInputs({
    username: { validate: value => value.length < 20 && value.length > 3 },
    email: { validate: value => value.length < 25 && value.length > 6 },
    password: { validate: value => value.length < 20 && value.length > 5 },
  }),

  withHandlers({
    onSubmit: ({ onUserChange, username, email, password, router }) => () => {
      onUserChange({ username, password, email, id: 1 });

      router.go('/');
    }
  }),
);

export default enhance(Component);