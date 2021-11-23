import styled from 'styled-components'

export function Grid({ children }) {
  return (
    <GridContainer>
      {children}
    </GridContainer>
  )
}


export function Grid2({ children }) {
  return (
    <Grid2Container>
      {children}
    </Grid2Container>
  )
}


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.grid3};
  grid-template-rows: auto;
  gap: 2rem;
  
`;
const Grid2Container = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.grid2};
  grid-template-rows: auto;
  gap: 2rem;
  
`;
