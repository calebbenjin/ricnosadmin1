import styled, {css} from 'styled-components'

export default function Heading({ children }) {
  return (
    <SecHeading>
      {children}
    </SecHeading>
  )
}


const SecHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding-bottom: 1rem;
  border-bottom: solid 1px ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.medium};
  /* font-weight: ${props => props.fontWeight ? props.fontWeight : '400'}; */

  h2 {
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`;
