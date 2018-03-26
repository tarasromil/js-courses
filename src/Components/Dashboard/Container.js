// import { withHandlers } from 'recompose';
// import { connect } from 'react-redux';
import { compose, withInputs } from 'custom-hoc';
import { withUser } from '../../utils';
import Component from './Component';
// import { searchActions } from '../../modules/search';

// const mapStateToProps = ({ search }) => ({
//   search
// });
//
// const mapDispathToProps = (dispatch) => ({
//   changeSearchValue: value => dispatch(searchActions.setSearch(value)),
//   clearSearchValue: () => dispatch(searchActions.clearSearch())
// });

const enhance = compose(
  withUser,
  withInputs({
    search: 1,
    sortBy: { defaultValue: 'createdAt' },
  }),
);


export default enhance(Component);
