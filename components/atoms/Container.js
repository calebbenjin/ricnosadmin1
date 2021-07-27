import styled from 'styled-components'

export default function Container({ children, className}) {
  return (
    <Box className={className}>
      {children}
    </Box>
  )
}


const Box = styled.div`
  width: 95%;
  margin: 0 auto;
`;