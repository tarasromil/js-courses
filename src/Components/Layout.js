import styled from 'styled-components';
import { withRoute } from '../utils';


const Layout = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;
  
  & > * {
    align-self: center;
  }
`;


export default withRoute(Layout);



