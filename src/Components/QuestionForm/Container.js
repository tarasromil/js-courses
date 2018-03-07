import { compose, withHandlers } from 'recompose';
import { withInputs } from 'custom-hoc';
import * as R from 'ramda';
import Component from './Component';
import { db } from '../../utils';


const unique = array => [...new Set(array)];

const toArray = string => string.split(' ');

const stripSpaces = string => string.trim().replace(/\s+/g, ' ');

const prepareTags = R.compose(
  unique,
  toArray,
  stripSpaces,
);


const enhance = compose(
  withInputs({
    title: 1,
    description: 1,
    tags: 1,
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
