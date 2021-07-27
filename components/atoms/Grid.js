import styled from 'styled-components'
import Card from './Card'

export default function Grid({ children }) {
  return (
    <GridContainer>
      {children}
    </GridContainer>
  )
}


const GridContainer = styled.div`

`;
