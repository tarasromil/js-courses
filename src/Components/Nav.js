import styled from 'styled-components';
import T from 'prop-types';


const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props => props.maxWidth}px;
  
  & > * {
    align-self: center;
  }
`;


Nav.propTypes = {
  maxWidth: T.number,
};


Nav.defaultProps = {
  maxWidth: 900
};


export default Nav;
