import styled from 'styled-components';
import { withRouter } from '../utils';


const Content = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;

  & > * {
    align-self: center;
  }
`;


export default withRouter(Content);
