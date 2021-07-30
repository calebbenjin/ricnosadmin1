import styled from 'styled-components'

export default function Container({ children}) {
  return (
    <Box>
      {children}
    </Box>
  )
}


const Box = styled.div`
  width: 95%;
  margin: 0 auto;
`;