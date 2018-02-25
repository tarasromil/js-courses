import styled from 'styled-components';


const Button = styled.button`
  border: ${props => props.primary ? 'none' : '3px solid #ff9f00'};
  cursor: pointer;
  padding: 5px 10px;
  background: ${props => props.primary ? '#ff9f00' : '#fff'};
  color: ${props => props.primary ? '#000' : '#ff9f00'};
  border-radius: 5px;
  font-weight: 700;
  text-decoration: none;
  outline: none;
  transition: box-shadow 300ms, color 250ms, background 100ms;
  
  &:hover {
    box-shadow: 0 3px 6px ${props => props.primary ? '#000' : '#ff000c'};
  }
  
  &:active {
    color: #fff;
    background: ${props => props.primary ? '#ff6500' : '#ff9f00'};
  }
`;


export default Button;
