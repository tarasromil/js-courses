import React from 'react';
import T from 'prop-types'


const contextTypes = {
  routes: T.object.isRequired,
  location: T.string.isRequired,
  go: T.func.isRequired,
};


const matchRoute = ({ location, routes }) => {
  const foundRoute = Object.keys(routes).find(route => location === route) || '*';

  return { Route: routes[foundRoute], params: {} };
};


const withRouter = (BaseComponent) => {
  const WithRouter = (props, context) => {
    const { Route, params } = matchRoute(context);

    const factory = React.createFactory(Route);
    return (
      <BaseComponent>
        {factory({ ...props, router: { ...context, params },  })}
      </BaseComponent>
    );
  };


  WithRouter.contextTypes = contextTypes;


  return WithRouter;
};


export default withRouter;
