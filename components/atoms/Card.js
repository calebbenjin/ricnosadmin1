import styled from 'styled-components'

export default function Card({ children }) {
  return (
    <CardBody>
      {children}
    </CardBody>
  )
}



const CardBody = styled.div`
  box-shadow: ${props => props.theme.shadows.shadow1};
  background: ${props => props.theme.colors.white};
  padding: 20px;
`;