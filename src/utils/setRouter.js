import React from 'react';
import T from 'prop-types'


const childContextTypes = {
  location: T.string.isRequired,
  go: T.func.isRequired,
};


const setRouter = (BaseComponent) => {
  const factory = React.createFactory(BaseComponent);


  class SetRouter extends React.Component {
    state = {
      location: window.location.pathname,
    };

    getChildContext() {
      return {
        location: this.state.location,
        go: location => {
          if (this.state.location !== location) {
            this.setState(
              { location },
              () => { window.history.pushState(null, null, location) },
            );
          }
        },
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
