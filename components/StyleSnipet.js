import styled, {css} from 'styled-components'
import { useState } from 'react';


const Body = styled.div`
  text-align: center;
  margin: 5rem 0;
`;

const Title = styled.h1`
  color: ${props => props.color ? props.color : props.theme.colors.primary}
  /* ${props => props.primary && css`
    color: ${props => props.theme.colors.primary};
    font-size: 3rem;
  `} */
`;

const Button = styled.button`
  font-size: 2rem;
  background: #333;
  padding: 10px 30px;
  color: #fff;
  border: none;
  border-radius: 55px;
  background: ${props => props.bg ? props.bg : '#333'};
  width: ${props => props.maxWidth ? props.maxWidth : ''};
  transition: ease 0.2s all;
  ${props => props.primary && css`
    background: ${props => props.theme.colors.primary};
    font-size: 3rem;
  `}
`;


export default function StyleSnipet({children}) {
  const [primary, setPrimary] = useState(false)
  return (
    <Body>
      <Title >Mastering styled components</Title>
      <Button bg="red" primary={primary} onClick={() => setPrimary(!primary)}>Click me</Button>
      {children}
    </Body>
  )
}
