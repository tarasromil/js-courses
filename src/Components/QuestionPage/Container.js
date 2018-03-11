import { branch, compose, lifecycle, renderComponent, withStateHandlers, withHandlers } from 'recompose';
import {  withInputs } from 'custom-hoc';
import { withRouter } from 'react-router';
import { db } from '../../utils';
import AppLoader from '../Loaders/AppLoader';
import Component from './Component';


const enhance = compose(
  withStateHandlers({ question: {}, user: {}, isFetching: true }),

  withRouter,

  lifecycle({
    async componentWillMount() {
      const questionId = Number(this.props.match.params.questionId);

      const question = await db.questions.findOne(questionId);

      const user = await db.users.findOne(question.createdById);

      this.setState({ question, user, isFetching: false });
    },
  }),

  branch(
    ({ isFetching }) => isFetching,
    renderComponent(AppLoader)
  ),

  withInputs({
    answer: {
      validate: value => value.length > 0,
    },
  }),

  withHandlers({
    onSubmit: ({ answer }) => () => {
      console.log(answer);
    }
  }),
);


export default enhance(Component);