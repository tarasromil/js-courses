import React from 'react';
import T from 'prop-types'


const contextTypes = {
  routes: T.object.isRequired,
  location: T.string.isRequired,
  go: T.func.isRequired,
};


const diversifyIndexes = parts => {
  const indexes = { paramsIndexes: [], pathIndexes: [] };
  parts.forEach((part, index) => (part.match(/:\w+:/) ?
    indexes.paramsIndexes.push(index) :
    indexes.pathIndexes.push(index)));
  return indexes;
};

const trimColons = string => string.replace(/:/g, '');

const getPartByIndex = (index, parts) => parts[index];

const getParamName = (index, parts) => trimColons(getPartByIndex(index, parts));

const getParamObj = (index, locationParts, routeParts) =>
  ({ [getParamName(index, routeParts)]: getPartByIndex(index, locationParts) });

const reduceParams = (indexes, locationParts, routeParts) => indexes.reduce(
  (acc, index) => ({ ...acc, ...getParamObj(index, locationParts, routeParts) }),
  {}
);

const getParts = string => {
  const startIndex = Number(string.indexOf('/') === 0);
  const lastIndex = string.lastIndexOf('/') === string.length - 1 ? -1 : string.length;
  return string.slice(startIndex, lastIndex).split('/');
};

const findByCount = (routes, location) => {
  const locationParts = getParts(location);

  let params = {};

  const index = routes.findIndex(route => {
    const routeParts = getParts(route);

    if (locationParts.length === routeParts.length) {
      const { pathIndexes, paramsIndexes } = diversifyIndexes(routeParts);

      const isMatch = pathIndexes.every(index => locationParts[index] === routeParts[index]);
      if (isMatch) {
        params = reduceParams(paramsIndexes, locationParts, routeParts);
        return true
      }
    }
    
    return false;
  });
  
  return [index, params];
};

const findExact = (routes, location) => routes.findIndex(route => route === location);

const noIndex = index => index === -1;

const getRoute = ({ location, routes }) => {
  let params = {};

  const routeKeys = Object.keys(routes);
  let findIndex = findExact(routeKeys, location);

  if (noIndex(findIndex)) {
    [findIndex, params] = findByCount(routeKeys, location);
  }

  if (noIndex(findIndex)) {
    findIndex = routeKeys.findIndex(route => route === '*');
  }

  if (noIndex(findIndex)) {
    throw new Error('Wrong route');
  }

  const foundKey = routeKeys[findIndex];

  return { params, Route: routes[foundKey] };
};


const withRouter = (renderContent = false) => (BaseComponent) => {
  const baseFactory = React.createFactory(BaseComponent);
  const WithRouter = (props, context) => {
    if (renderContent) {
      const { Route, params } = getRoute(context);
      const factory = React.createFactory(Route);
      return (
        <BaseComponent>
          {factory({ ...props, router: { ...context, params } })}
        </BaseComponent>
      );
    } else {
      return baseFactory({ ...props, router: context })
    }
  };


  WithRouter.contextTypes = contextTypes;


  return WithRouter;
};


export default withRouter;
