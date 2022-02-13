import Card from '../atoms/Card'
import styled from 'styled-components'
import { BsThreeDots } from 'react-icons/bs'
import { Heading } from "@chakra-ui/react"

export default function NotificationCard({ title, number,  icon }) {


  return (
    <NotificationCardStyle>
      <Card className='card'>
        <div className='header'>
          <h4>{title}</h4>
          <BsThreeDots className='icon' />
        </div>
        <div className='cardBody'>
          <div className='iconCap'>
            {icon}
          </div>
          <Heading>{number}</Heading>
          
        </div>
      </Card>
    </NotificationCardStyle>
  )
}

const NotificationCardStyle = styled.div`
  .card {
    padding: 20px;

    .header {
      border-bottom: solid 1px ${(props) => props.theme.colors.grey};
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        font-weight: ${(props) => props.theme.fontWeight.bold};
        font-size: ${(props) => props.theme.fontSize.small};
        color: ${(props) => props.theme.colors.primary};
        padding-bottom: 1rem;
      }
      .icon {
        font-size: ${(props) => props.theme.fontSize.large};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        color: ${(props) => props.theme.colors.grey};
      }
    }

    .cardBody {
      padding-top: 1rem;
      display: flex;
      align-items: center;
      /* justify-content: cente */
      .iconCap {
        width: 45px;
        height: 45px;
        /* padding: 10px; */
        border-radius: 50%;
        box-shadow: ${(props) => props.theme.shadows.shadow2};
        background: ${(props) => props.theme.colors.secondary};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2rem;

        .icon {
          color: ${(props) => props.theme.colors.white};
          font-size: ${(props) => props.theme.fontSize.medium};
        }
      }

      .notice {
        display: flex;
        align-items: center;

        h4 {
          font-weight: ${(props) => props.theme.fontWeight.bold};
          font-size: ${(props) => props.theme.fontSize.small};
          color: ${(props) => props.theme.colors.primary};
          margin-right: 3px;
        }

        .icon {
          color: ${(props) => props.theme.colors.success};
          font-weight: ${(props) => props.theme.fontWeight.bold};
        }

        .text {
          color: ${(props) => props.theme.colors.success};
          margin-right: 10px;
        }
        .icon-red {
          color: ${(props) => props.theme.colors.secondary};
          font-weight: ${(props) => props.theme.fontWeight.bold};
        }

        .text-red {
          color: ${(props) => props.theme.colors.secondary};
          margin-right: 10px;
        }
        .week {
          color: ${(props) => props.theme.colors.primary};
          margin-right: 10px;
        }
      }
    }
  }
`
