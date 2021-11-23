import styled from 'styled-components'
import Card from '../atoms/Card'

export default function ActiveShipments({ children }) {
  return (
    <Card>
      <Box>
        <div className='header'>
          <h4>Active Shipments</h4>
        </div>
        <div className='card'>{children}</div>
      </Box>
    </Card>
  )
}

const Box = styled.div`
  height: 70vh;
  overflow-y: scroll;
  padding: 30px;
  background: #fff;
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
  .card {
    padding: 20px;
  }
`
