import React from 'react';
import T from 'prop-types';
import { compose, withContext, withState } from 'recompose';
import styled from 'styled-components';

import TopNavContainer from './Components/TopNav/Container';
import Routes from './Components/Routes/Component';


const RootWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
`;


const App = () => (
  <RootWrapper>
    <TopNavContainer />

    <Routes />
  </RootWrapper>
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
