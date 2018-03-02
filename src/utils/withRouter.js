import React from 'react';
import T from 'prop-types'
import { getRoute } from './withRoute';


const contextTypes = {
  routes: T.object.isRequired,
  location: T.string.isRequired,
  go: T.func.isRequired,
};


const withRouter = (renderContent = false) => (BaseComponent) => {
  const baseFactory = React.createFactory(BaseComponent);

  const WithRouter = (props, context) => baseFactory({
    ...props,
    router: { ...context, params: getRoute(context).params },
  });

  WithRouter.contextTypes = contextTypes;

  return WithRouter;
};


export default withRouter;
