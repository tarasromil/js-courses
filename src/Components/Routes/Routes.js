import React from 'react';

import Dashboard from '../../Pages/Dashboard';
import SignIn from '../../Pages/SignIn';
import SignUp from '../../Pages/SignUp';
import NotFound from '../../Pages/NotFound';

import styled from 'styled-components';


const Content = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;

  & > * {
    align-self: center;
  }
`;


const COMPONENTS = {
  '/': Dashboard,
  '/signin': SignIn,
  '/signup': SignUp,
};


const Routes = ({ location, ...props }) => {
  const Component = COMPONENTS[location] || NotFound;

  return (
    <Content>
      <Component {...props} />
    </Content>
  );
};


export default Routes;
