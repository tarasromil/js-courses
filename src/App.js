import React from 'react';
import T from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { compose, withContext, withState } from 'recompose';

import TopNavContainer from './Components/TopNav/Container';
import Layout from './Components/Layout';
import Routes from './Components/Routes/Component';


const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <TopNavContainer />

      <Layout>
        <Routes />
      </Layout>
    </React.Fragment>
  </BrowserRouter>
);


const enhance = compose(
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
