import styled from 'styled-components'

export default function ActivityLog() {
  return (
    <Box>
      <div className='header'>
        <h4>Activity Log</h4>
      </div>
    </Box>
  )
}

const Box = styled.div`
  height: 80vh;
  overflow-y: scroll;
  padding: 30px;
  background: #fff;
  box-shadow: ${props => props.theme.shadows.shadow1};
  border-radius: 6px;
  .header {
    border-bottom: solid 1px ${(props) => props.theme.colors.grey};
    text-transform: uppercase;
    h4 {
      font-weight: ${(props) => props.theme.fontWeight.bold};
      font-size: ${(props) => props.theme.fontSize.small};
      color: ${(props) => props.theme.colors.primary};
      padding-bottom: 1rem;
    }
  }
`
