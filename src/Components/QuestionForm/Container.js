import { compose, withHandlers, lifecycle, withStateHandlers, branch, renderComponent } from 'recompose';
import { withInputs } from 'custom-hoc';
import * as R from 'ramda';
import { db } from '../../utils';

import Component from './Component';
import AppLoader from '../Loaders/AppLoader';


const unique = array => [...new Set(array)];

const toArray = string => string.split(' ');

const stripSpaces = string => string.trim().replace(/\s+/g, ' ');

const prepareTags = R.compose(
  unique,
  toArray,
  stripSpaces,
);


const enhance = compose(
  withStateHandlers({ question: {}, isFetching: true }),

  lifecycle({
    async componentWillMount() {
      const { questionId } = this.props.router.params;
      let question = {};
      if (questionId) {
        question = await db.questions.findOne(questionId);
      }
      this.setState({ question, isFetching: false });
    },
  }),

  branch(
    ({ isFetching }) => isFetching,
    renderComponent(AppLoader)
  ),

  withInputs(({ question }) => {
    return ({
      title: {
        validate: value => value.length > 9,
        defaultValue: question.title },
      description: {
        validate: value => value.length > 9,
        defaultValue: question.description,
      },
      tags: { defaultValue: question.tags && question.tags.join(' ') },
    })
  }),

  withHandlers({
    onSubmit: ({ tags, title, description, router }) => () => {
      const document = {
        title,
        description,
        tags: prepareTags(tags),
      };

      if (router.params.questionId) {
        db.questions.update(router.params.questionId, document)
      } else {
        db.questions.insert(document);
      }

      router.go('/');
    }
  })
);


export default enhance(Component);
