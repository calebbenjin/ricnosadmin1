import Card from '../atoms/Card'
import styled from 'styled-components'
import { Progress, Flex, Text, Box } from "@chakra-ui/react"

export default function Payout({ notify, value, amount, types }) {

  const formatMoney = (n) => {
    return "NGN " + (Math.round(n * 100) / 100).toLocaleString();
  }

  return (
    <PayoutContainer>
      <Card className='card'>
        <div className='header'>
          <h4>payout</h4>
          <h5>
            Payment request <sup>{notify}</sup>
          </h5>
        </div>

        <div className='cardBody'>
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Text fontWeight='bold' color="gray">Type</Text>
            </Box>
            <Box>
              <Text fontWeight='bold' color="gray">Percentage</Text>
            </Box>
            <Box>
              <Text fontWeight='bold' color="gray">Value</Text>
            </Box>
          </Flex>
          <div className="flexBody">
            <h4 className="head types">Riders</h4>
            <div className="head progressBar">
              <div className="box">
                <Progress borderRadius="30" size="sm" mr="2" colorScheme="red" value={value} /> 
              </div>
              <div className="box1">
                {value}%
              </div>
             </div>
            <Text>{formatMoney(amount)}</Text>
          </div>
        </div>
      </Card>
    </PayoutContainer>
  )
}

const PayoutContainer = styled.div`
  .card {
    padding: 30px;
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
        text-transform: uppercase;
      }
      h5 {
        font-weight: ${(props) => props.theme.fontWeight.bold};
        font-size: ${(props) => props.theme.fontSize.small};
        color: ${(props) => props.theme.colors.grey};
        padding-bottom: 1rem;
        text-transform: uppercase;
      }
      sup {
        background: red;
        width: 17px;
        height: 17px;
        padding: 1px 4px;
        border-radius: 50%;
        color: #fff;
        font-weight: ${(props) => props.theme.fontWeight.bold};
        font-size: 0.7rem;
      }
    }

    .cardBody {
      .flex {
        display: flex;
        align-items: center;
        padding-top: 10px;

        .title {
          /* background: red; */
          width: 100%;
          color: ${(props) => props.theme.colors.grey};
        }
        
        }
      }

      .flexBody {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 10px;


        .title {
          width: 100%;
          color: ${(props) => props.theme.colors.grey};
        }

        .right {
          text-align: right;
        }

        .head {
          margin-left: 1rem;
          font-weight: ${(props) => props.theme.fontWeight.bold};
          white-space: nowrap;
        }

        .progressBar {
          display: flex;
          position: relative;
          align-items: center;
          width: 30%;
          justify-content: space-between;

          .box {
            width: 80%;
          }
          .box1 {
            width: 15%;
          }

        .types {
          font-weight: ${(props) => props.theme.fontWeight.bold};
        }

        .amount {
          text-align: right;
          border: none;
        }
      }
    }
  }
`
