import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Card from '../atoms/Card'



export default function ShipmentCard({data}) {

  console.log(data)
  return (
    <Box>
      <Card className='card'>
        <Image src='/ricnoslogo.png' className="img" width='100' height='80' />
        <div className='list'>
          <div className='head'>
            <h4>item name</h4>
            <h4>Quantity</h4>
            <h4>Amount</h4>
            <h4>Pick up</h4>
          </div>
          <div className='body'>
            <h4>{data.itemName}</h4>
            <h4>{data.quantity}</h4>
            <h4>{data.amount}</h4>
            <h4>{data.location}</h4>
          </div>
        </div>
        <Link href='/'>
          <a className="btn">View</a>
        </Link>
      </Card>
    </Box>
  )
}

const Box = styled.div`
  margin-top: 1rem;
  .card {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list {
    width: 60%;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      font-weight: ${(props) => props.theme.fontWeight.bold};
      color: ${(props) => props.theme.colors.secondary};
      h4 {
        width: 100%;
        font-size: 0.8rem;
      }
    }
    .body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      /* color: ${(props) => props.theme.colors.secondary}; */
      h4 {
        width: 100%;
      }
    }
  }
`
