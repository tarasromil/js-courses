import React from 'react';
import T from 'prop-types'


const contextTypes = {
  location: T.string.isRequired,
  go: T.func.isRequired,
};


const withRouter = (BaseComponent) => {
  const factory = React.createFactory(BaseComponent);


  const WithRouter = (props, context) => factory({ ...props, ...context });


  WithRouter.contextTypes = contextTypes;


  return WithRouter;
};


export default withRouter;
