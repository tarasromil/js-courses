import { compose, withStateHandlers, lifecycle, branch, renderComponent } from 'recompose';
import { withRouter } from 'react-router';
import { db } from '../../utils';

import AppLoader from '../Loaders/AppLoader';
import Component from './Component';


const enhance = compose(
  withStateHandlers({ answers: [], users: [], votes: [], isFetching: true }),

  withRouter,

  lifecycle({
    async componentWillMount() {
      const questionId = Number(this.props.match.params.questionId);

      let answers = await db.answers.find();
      answers = answers.filter(answer => answer.questionId === questionId);

      let votes = await db.votes.find();
      const answerIds = answers.map(a => a._id);
      votes = votes.filter(vote => answerIds.includes(vote.answerId));

      let users = await db.users.find();

      this.setState({ answers, votes, users, isFetching: false });
    },
  }),

  branch(
    ({ isFetching }) => isFetching,
    renderComponent(AppLoader)
  ),
);


export default enhance(Component);
