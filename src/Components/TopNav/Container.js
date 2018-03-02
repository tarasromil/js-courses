import { createFactory } from 'react';
import TopNavComponent from './Component';


const MENU_ITEMS = {
  DEFAULT: [
    { label: 'Wrong URL', href: '/wrong-url' },
    { label: 'Google', href: 'https://google.com', target: '_blank' },
  ],
  LOGGED_OUT: [
    { label: 'Sign In', href: '/signin' },
    { label: 'Sign Up', href: '/signup' },
  ],
};


const getItemsForUser = ({ onUserChange, user }) => [
  { label: `Hello, ${user.username}`, },
  { label: 'Sing Out', onClick: () => onUserChange() },
];


const generateList = props => [].concat(
  MENU_ITEMS.DEFAULT,
  props.user ? getItemsForUser(props) : MENU_ITEMS.LOGGED_OUT
);


const withContainer = mapProps => (BaseComponent) => {
  const factory = createFactory(BaseComponent);

  return props => factory({ ...props, list: generateList(mapProps(props)) });
};


export default withContainer(
  props => ({
    user: props.user,
    onUserChange: props.onUserChange,
  })
)(TopNavComponent);
