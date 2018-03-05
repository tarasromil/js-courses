import { withStateHandlers } from 'recompose';
import Component from './Component';


const enhance = withStateHandlers(
  { search: '' },
  {
    onSearchChange: () => event => ({
      search: event.target.value,
    }),
  },
);


export default enhance(Component);
