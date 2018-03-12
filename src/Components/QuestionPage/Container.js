import { branch, compose, lifecycle, renderComponent, withStateHandlers } from 'recompose';
import { withRouter } from 'react-router';
import { db } from '../../utils';
import AppLoader from '../Loaders/AppLoader';
import Component from './Component';


const enhance = compose(
  withStateHandlers({ question: {}, author: {}, isFetching: true }),

  withRouter,

  lifecycle({
    async componentWillMount() {
      const questionId = Number(this.props.match.params.questionId);

      const question = await db.questions.findOne(questionId);

      const author = await db.users.findOne(question.createdById);

      this.setState({ question, author, isFetching: false });
    },
  }),

  branch(
    ({ isFetching }) => isFetching,
    renderComponent(AppLoader)
  ),
);


export default enhance(Component);