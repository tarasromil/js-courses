import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';


const propTypes = {
  direction: T.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse',
  ]),
};


const defaultProps = {
  direction: 'column',
};


const Form = styled.form`
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
  flex-direction: ${props => props.direction};
  justify-content: space-between;

  & > * {
    align-self: center;
  }
`;


Form.propTypes = propTypes;


Form.defaultProps = defaultProps;


export default props => (
  <Form
    {...props}
    onSubmit={(event) => {
      event.preventDefault();
      props.onSubmit && props.onSubmit(event);
    }}
  />
);