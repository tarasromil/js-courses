import T from 'prop-types';
import styled from 'styled-components';
import { getContext } from 'recompose';


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


export default getContext({
  user: T.object,
  onUserChange: T.func
})(Layout);



