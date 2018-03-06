import { withStateHandlers } from 'recompose';
import Component from './Component';


const enhance = withStateHandlers(
  { search: '', sortBy: 'title' },
  {
    onChangeSearch: () => event => ({ search: event.target.value }),
    onChangeSortBy: () => event => ({ sortBy: event.target.value }),
  },
);


export default enhance(Component);
