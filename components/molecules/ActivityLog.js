import Link from 'next/link'
import styled from 'styled-components'
import ActiveLogCard from '../atoms/ActiveLogCard'

export default function ActivityLogCard() {
  return (
    <Box>
      <div className='header'>
        <h4>Activity Log</h4>
      </div>
      <ActiveLogCard trackCode="876786728" status="complete order" date="august 20" />
      <ActiveLogCard trackCode="876786728" status="complete order" date="august 20" />
      <ActiveLogCard trackCode="876786728" status="complete order" date="august 20" />
      <ActiveLogCard trackCode="876786728" status="complete order" date="august 20" />
      <ActiveLogCard trackCode="876786728" status="complete order" date="august 20" />
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
