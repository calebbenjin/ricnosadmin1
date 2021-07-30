import styled from 'styled-components'


export default function Section({ children }) {
  return (
    <SectionContainer>
      {children}
    </SectionContainer>
  )
}


const SectionContainer = styled.div`
  margin-bottom: 2rem;
`;
