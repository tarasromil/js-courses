import { branch, compose, lifecycle, renderComponent, withStateHandlers } from 'recompose';
import { withRouter } from 'react-router';
import { db } from '../../utils';
import AppLoader from '../Loaders/AppLoader';
import Component from './Component';


const enhance = compose(
  withStateHandlers({ question: {}, isFetching: true }),

  withRouter,

  lifecycle({
    async componentWillMount() {
      const { questionId } = this.props.match.params;
      const question = await db.questions.findOne(questionId);
      this.setState({ question, isFetching: false });
    },
  }),

  branch(
    ({ isFetching }) => isFetching,
    renderComponent(AppLoader)
  ),
);


export default enhance(Component);