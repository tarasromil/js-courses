import React, { Component, Fragment } from 'react';

import TopNav from './Components/TopNav';
import { setRouter } from './utils';
import Routes from "./Components/Routes";


class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };

    this.handleUser = this.handleUser.bind(this);
  }

  handleUser(user) {
    this.setState({ user });
  }

  render() {
    return (
      <Fragment>
        <TopNav
          user={this.state.user}
          onUserChange={this.handleUser}
        />

        <Routes
          user={this.state.user}
          onUserChange={this.handleUser}
        />
      </Fragment>
    );
  }
}



export default setRouter(App);
