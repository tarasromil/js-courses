import React from 'react';
import T from 'prop-types';

import { setRouter } from './utils';
import { compose, withContext, withState } from 'recompose';

import TopNavContainer from './Components/TopNav/Container';
import Layout from './Components/Layout';

import Dashboard from './Components/Dashboard/Container';
import QuestionPage from './Components/QuestionPage/Container'
import SignIn from './Components/SignIn/Container';
import SignUp from './Components/SignUp/Container';
import RestorePassword from './Components/RestorePassword/Container';
import NotFound from './Components/NotFound/Component';


const App = () => (
  <React.Fragment>
    <TopNavContainer />

    <Layout />
  </React.Fragment>
);


const enhance = compose(
  setRouter({
    '/': Dashboard,
    '/signin': SignIn,
    '/signup': SignUp,
    '/restore-password': RestorePassword,
    '/question/:questionId:': QuestionPage,
    '*': NotFound
  }) ,

  withState('user', 'onUserChange', null),

  withContext(
    {
      user: T.object,
      onUserChange: T.func,
    },
    props => ({
      user: props.user,
      onUserChange: props.onUserChange,
    }),
  )
);


export default enhance(App);
