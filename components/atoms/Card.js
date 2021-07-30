import styled from 'styled-components'

export default function Card({ children, className }) {
  return (
    <CardBody className={className}>
      {children}
    </CardBody>
  )
}



const CardBody = styled.div`
  box-shadow: ${props => props.theme.shadows.shadow1};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius};
  width: 100%;
`;