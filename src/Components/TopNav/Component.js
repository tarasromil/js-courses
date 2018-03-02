import React from 'react';
import T from 'prop-types';

import styled from 'styled-components';

import ApikoLogo from '../ApikoLogo';
import TopNavButton from '../Buttons/LinkButton';
import Nav from '../Nav';


const NavMenu = styled.menu`
  padding: 10px 30px;
`;


const TopNav = ({ list }) => (
  <Nav>
    <a href="/">
      <ApikoLogo height={80} />
    </a>

    <h2>Ask Apiko</h2>

    <NavMenu>
      {list.map(({ label, ...props }) => (
        <TopNavButton key={label} {...props}>
          {label}
        </TopNavButton>
      ))}
    </NavMenu>
  </Nav>
);


TopNav.propTypes = {
  onUserChange: T.func.isRequired,
  user: T.object,
  list: T.array.isRequired,
};


export default TopNav;
