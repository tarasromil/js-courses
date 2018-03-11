import { withInputs } from 'custom-hoc';
import Component from './Component';


const enhance = withInputs({
  search: 1,
  sortBy: { defaultValue: 'createdAt' },
});


export default enhance(Component);
