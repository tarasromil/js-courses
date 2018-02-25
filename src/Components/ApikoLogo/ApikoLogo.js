import React from 'react';
import T from 'prop-types';
import logo from './ApikoLogo.jpg';
import styled from 'styled-components';


const Img = styled.img`
  cursor: pointer;
  height: ${props => props.height}
`;

const ApikoLogo = props => (
  <Img
    src={logo}
    alt="Apiko Logo"
    {...props}
  />
);

ApikoLogo.propTypes = {
  height: T.number,
};

ApikoLogo.defaultProps = {
  height: 80,
};

export default ApikoLogo;
