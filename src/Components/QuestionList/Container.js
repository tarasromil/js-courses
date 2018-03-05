import { branch, compose, lifecycle, renderComponent, withProps, withStateHandlers } from 'recompose';
import { db } from '../../utils';
import AppLoader from '../Loaders/AppLoader';
import Component from './Component';


const LIMIT = 10;


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

  withProps(
    ({ questions, search, limit }) => ({
      questions: questions
        .filter(item => new RegExp(search, 'gi').test(item.title))
        .slice(0, limit),
    })
  ),

);


export default enhance(Component);