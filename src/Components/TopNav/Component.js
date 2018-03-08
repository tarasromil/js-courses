import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import ApikoLogo from '../ApikoLogo';
import LinkButton from '../Buttons/LinkButton';
import Nav from '../Nav';


const NavMenu = styled.menu`
  padding: 10px 30px;
`;


const TopNav = ({ list }) => (
  <Nav>
    <Link to="/">
      <ApikoLogo height={80} />
    </Link>

    <h2>Ask Apiko</h2>

    <NavMenu>
      {list.map(({ label, ...props }) => (
        <LinkButton key={label} {...props}>
          {label}
        </LinkButton>
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
