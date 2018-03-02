import React, { Component, Fragment } from 'react';

import { setRouter } from './utils';

import TopNavContainer from './Components/TopNav/Container';
import Layout from './Components/Layout';
import AppLoader from './Components/Loaders/AppLoader';

import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';

const DATA_URL = 'https://jsonplaceholder.typicode.com/posts';


class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      data: [],
      isFetching: true,
    };

    this.handleUser = this.handleUser.bind(this);
  }

  componentDidMount() {
    fetch(DATA_URL)
      .then(response => response.json())
      .then(data => data.map(item => ({ ...item, date: Date.now() })))
      .then(data => this.setState({ data, isFetching: false }))
  }

  handleUser(user) {
    this.setState({ user });
  }

  render() {
    return (
      <Fragment>
        <TopNavContainer
          user={this.state.user}
          onUserChange={this.handleUser}
        />

        {this.state.isFetching ? (
          <AppLoader />
        ) : (
          <Layout
            user={this.state.user}
            onUserChange={this.handleUser}
            data={this.state.data}
          />
        )}

      </Fragment>
    );
  }
}


export default setRouter({
  '/': Dashboard,
  '/signin': SignIn,
  '/signup': SignUp,
  '/question/:questionId:': ({ questionId }) => <div>Question: {questionId}</div>,
  '/question/:questionId:/comment/:commentId:': ({ questionId, commentId }) =>
                                                  <div>Question: {questionId}, Comment: {commentId}</div>,
  '*': NotFound
})(App);
