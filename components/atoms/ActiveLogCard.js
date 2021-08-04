import Link from 'next/link'
import styled from 'styled-components'

export default function ActivityLogCard({trackCode, status, date}) {
  return (
      <Card className="card">
        <div className="cardHead">
          <div className="code">
            <p>{trackCode}</p>
            <span>{status}</span>
          </div>
          <p className="date">{date}</p>
        </div>
        <div className="cardBody">
          <h3>Payment Request</h3>
          <Link href="/">
            <a>View</a>
          </Link>
        </div>
      </Card>
  )
}

const Card = styled.div`
    padding: 20px;
    border: solid 1px #333;
    border-radius: 6px;
    margin-top: 1rem;
    .cardHead {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: solid 1px #333;
      padding-bottom: 10px;
      text-transform: capitalize;
      .date {
        text-transform: uppercase;
      }
      .code {
        display: flex;
        align-items: center;
        p {
          font-size: ${(props) => props.theme.fontSize.medium}
        }
        span {
          background: #333;
          color: #fff;
          padding: 1px 6px;
          border-radius: 2px;
          margin-left: 6px;
          font-size: 0.7rem;
        }
      }
    }
    .cardBody {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      h3 {
        font-weight: ${(props) => props.theme.fontWeight.bold};

      }
    }
  
`
