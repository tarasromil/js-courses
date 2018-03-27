import { combineReducers } from 'redux';

import user from './user';
import search from './search';
import sort from './sort';

export default combineReducers({
  user,
  search,
  sort,
});
