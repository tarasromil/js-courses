import React from 'react';
import T from 'prop-types';

import ApikoLogo from '../ApikoLogo';
import TopNavButton from '../Buttons/LinkButton';
import Nav from '../Nav';
import styled from 'styled-components';


const additionalItems = [
  { label: 'Blog', href: 'https://google.com' },
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


const NavMenu = styled.menu`
  padding: 10px 30px;
`;


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
