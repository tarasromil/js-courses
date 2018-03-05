import React from 'react';


const NotFound = ({ router }) => (
  <div>
    <h1>404</h1>
    <div>Sorry, page <strong>{router.location}</strong> not found!</div>
  </div>
)


export default NotFound;
