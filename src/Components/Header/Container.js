import { connect } from 'react-redux';
import { compose } from 'recompose';

import { searchActions } from '../../modules/search';
import Component from './Component';

const mapStateToProps = state => ({
  user: state.user,
  search: state.search,
  sortBy: state.sort,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchValue: value => dispatch(searchActions.setSearch(value)),
  clearSearchValue: () => dispatch(searchActions.clearSearch())
});

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhancer(Component);