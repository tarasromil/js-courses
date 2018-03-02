import styled from 'styled-components';


const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;

  & > * {
    align-self: center;
  }
`;


export default Nav;
