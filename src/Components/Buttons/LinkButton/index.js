import styled from 'styled-components';


const LinkButton = styled.a`
  border: none;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px 10px;
  background: #ff9f00;
  color: #000;
  border-radius: 5px;
  font-weight: 700;
  text-decoration: none;
  outline: none;
  transition: box-shadow 300ms, color 250ms, background 100ms;
  
  &:hover {
    box-shadow: 0 3px 6px #000;
  }
  
  &:active {
    color: #fff;
    background: #ff6500;
  }
`;


export default LinkButton;
