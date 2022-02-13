import Link from 'next/link'
import styled from 'styled-components'
import { Flex, Text, Box, Grid } from "@chakra-ui/react"

export default function ActivityLogCard({trackCode, status, date}) {
  return (
      <Card className="card">
        <div className="cardHead">
          <Grid gridTemplateColumns="repeat(2, 1fr)" gap="4">
            <div className="code">
              <p>{trackCode}</p>
              <span>{status}</span>
            </div>
            <p className="date">{date}</p>
          </Grid>
        </div>
        <div className="cardBody">
          <h4>Payment Request</h4>
        </div>
      </Card>
  )
}

const Card = styled.div`
    padding: 10px;
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
        /* font-size: 0.4rem; */
      }
      .code {
        display: flex;
        align-items: center;
        p {
          font-size: ${(props) => props.theme.fontSize.small}
        }
        span {
          background: #333;
          color: #fff;
          padding: 1px 3px;
          white-space: nowrap;
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
      h4 {
        font-weight: ${(props) => props.theme.fontWeight.bold};

      }
    }
  
`
