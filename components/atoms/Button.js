import styled from 'styled-components'


export default function Button({ children, className }) {
  return (
    <ButtonComponent type="submit" className={className}>
      {children}
    </ButtonComponent>
  )
}



const ButtonComponent = styled.button`
  background: red;
  color: #fff;
  padding: 7px 25px;
  border-radius: 8px;
  transition: all 0.3s ease-in;
  font-size: ${(props) => props.theme.fontSize.small};
  margin: 0 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #9c0202;
  }
`;
