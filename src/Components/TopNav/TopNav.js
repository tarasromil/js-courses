import React from 'react';
import T from 'prop-types';

import ApikoLogo from '../ApikoLogo';
import NavMenu from './NavMenu';
import TopNavButton from '../Buttons/TopNavButton/TopNavButton';
import Nav from '../Nav';


const additionalItems = [
  { label: 'Blog' },
];


const getMenuItems = ({ user, onUserChange }) => {
  let menuList = [
    {
      label: 'Sign In',
      href: '/signin',
    },
    {
      label: 'Sign Up',
      href: '/signup',
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
    <a href="/">
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


export default TopNav;
