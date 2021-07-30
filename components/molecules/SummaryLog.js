import styled from 'styled-components'
import { BsThreeDots, BsArrowUp, BsArrowDown } from 'react-icons/bs'
import Card from '../atoms/Card'

export default function SummaryLog() {
  return (
    <Box>
      <div className='header'>
        <h4>Summary</h4>
      </div>

      <div className='flex'>
        <Card className='card'>
          <h4>Total users</h4>
          <h1>450</h1>
          <p className='text'>
            <BsArrowUp className='icon' />
            2.3 less than week{' '}
          </p>
        </Card>
        <Card className='card'>
          <h4>Total Agent</h4>
          <h1>450</h1>
          <p className='text'>
            <BsArrowUp className='icon' />
            1.4 less than week
          </p>
        </Card>
      </div>

      <TotalOrder>
        <h3>Total Orders</h3> <h1>2083</h1>{' '}
        <p className='text'>
          <BsArrowUp className='icon' /> 1.4 
        </p> 
        less than week
      </TotalOrder>

      <TotalOrder>
        <h3>Total Delivery</h3> <h1>2011</h1>{' '}
        <p className='text'>
          <BsArrowUp className='icon' /> 1.4 
        </p> 
        less than week
      </TotalOrder>
    </Box>
  )
}

const Box = styled.div`
  height: 80vh;
  padding: 30px;
  background: #fff;
  box-shadow: ${(props) => props.theme.shadows.shadow1};
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

  .flex {
    display: grid;
    grid-template-columns: ${(props) => props.theme.grid2};
    grid-template-rows: auto;
    gap: 2rem;
    margin: 1rem 0;

    .card {
      background: ${(props) => props.theme.colors.secondary};
      padding: 20px;
      text-align: center;
      color: #fff;
      border-radius: 6px;
      h4 {
        font-weight: ${(props) => props.theme.fontWeight.bold};
      }
      h1 {
        font-size: ${(props) => props.theme.fontSize.large};
        font-weight: ${(props) => props.theme.fontWeight.bold};
      }
      .text {
        display: flex;
        align-items: center;
        justify-content: center;
        
      }
    }
  }
`

const TotalOrder = styled.div`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 20px;
  border-radius: ${(props) => props.theme.radius};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  h3 {
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-right: 1rem;
  }
  h1 {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  .text {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.success};
    margin-right: 5px;
  }
`
