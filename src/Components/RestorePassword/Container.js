import { compose, withHandlers } from 'recompose';
import { withInputs } from 'custom-hoc';
import Component from './Component';


const enhance = compose(
  withInputs({
    oldPassword: { validate: value => value.length < 20 && value.length > 5 },
    newPassword: { validate: value => value.length < 20 && value.length > 5 },
  }),

  withHandlers({
    onSubmit: ({ oldPassword, newPassword, router }) => () => {
      alert(`
        Old: ${oldPassword}
        New: ${newPassword}
      `);
      router.go('/signin')
    }
  }),
);

export default enhance(Component);