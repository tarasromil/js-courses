import React from 'react';
import T from 'prop-types'


const childContextTypes = {
  routes: T.object.isRequired,
  location: T.string.isRequired,
  go: T.func.isRequired,
};


const isPreventRedicrect = anchor => anchor && anchor.href && anchor.href.match(window.location.origin);


const setRouter = (routes) => (BaseComponent) => {
  const factory = React.createFactory(BaseComponent);


  class SetRouter extends React.Component {
    constructor() {
      super();

      this.go = (location) => {
        if (this.state.location !== location) {
          this.setState(
            { location },
            () => { window.history.pushState(null, null, location) },
          );
        }
      };

      this.preventRedirect = (event) => {
        const anchor = event.path.find(node => node.href);
        if (isPreventRedicrect(anchor)) {
          event.preventDefault();
          this.go(anchor.attributes.href.value);
        }
      };
    }

    state = {
      location: window.location.pathname,
    };

    componentDidMount() {
      document.addEventListener('click', this.preventRedirect);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.preventRedirect);
    }

    getChildContext() {
      return {
        routes,
        location: this.state.location,
        go: this.go,
      };
    }

    render() {
      return factory(this.props)
    }
  }


  SetRouter.childContextTypes = childContextTypes;


  return SetRouter;
};


export default setRouter;
