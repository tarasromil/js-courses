import React from 'react';
import T from 'prop-types';

import ApikoLogo from '../ApikoLogo';
import NavMenu from './NavMenu';
import TopNavButton from '../Buttons/TopNavButton/TopNavButton';
import Nav from '../Nav';
import { withRouter } from '../../utils';


const additionalItems = [
  { label: 'Blog' },
  { label: 'GitHub' }
];


const getMenuItems = ({ user, onUserChange, go, location }) => {
  let menuList = [
    {
      label: 'Sign In',
      onClick: () => go('/signin'),
      active: location.match('signin'),
    },
    {
      label: 'Sign Up',
      onClick: () => go('/signup'),
      active: location.match('signup')
    },
  ];

  if (user) {
    menuList = [
      { label: `Hello, ${user.username}`, },
      {
        label: 'Sing Out',
        onClick: () => onUserChange(),
      },
    ];
  }

  return additionalItems.concat(menuList);
};


const TopNav = props => (
  <Nav>
    <a onClick={() => props.go('/')}>
      <ApikoLogo height={80} />
    </a>

    <h2>Ask Apiko</h2>

    <NavMenu>
      {getMenuItems(props).map(({ label, ...props }) => (
        <TopNavButton
          key={label}
          {...props}
        >
          {label}
        </TopNavButton>
      ))}
    </NavMenu>
  </Nav>
);


TopNav.propTypes = {
  onUserChange: T.func.isRequired,
  user: T.object,
};


export default withRouter(TopNav);
