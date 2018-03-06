import { branch, compose, lifecycle, renderComponent, withProps, withStateHandlers } from 'recompose';
import * as R from 'ramda';
import { db } from '../../utils';
import AppLoader from '../Loaders/AppLoader';
import Component from './Component';


const LIMIT = 10;

const matchBy = R.curry((search, string) => new RegExp(`${search}`, 'gi').test(string));

const filterByTitle = search => R.filter(R.compose(matchBy(search), R.prop('title')));

const prepareQuestions = ({ questions, search, limit, sortBy }) => R.compose(
  R.sortBy(R.prop(sortBy)),
  R.slice(0, limit),
  filterByTitle(search),
)(questions);


const enhance = compose(
  withStateHandlers(
    { questions: [], isFetching: true, limit: LIMIT },
    { onIncreaseLimit: ({ limit }) => () => ({ limit:  limit + LIMIT }) }
  ),

  lifecycle({
    componentWillMount() {
      db.find().then(questions => this.setState({ questions, isFetching: false }))
    },
  }),

  branch(
    ({ isFetching }) => isFetching,
    renderComponent(AppLoader)
  ),

  withProps(props => ({ questions: prepareQuestions(props) })),
);


export default enhance(Component);