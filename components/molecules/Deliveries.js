import Card from "../atoms/Card";
import styled from 'styled-components'
import Charts from "./Charts";

export default function Deliveries() {
  return (
    <Container>
      <Card className='card'>
        <div className='header'>
          <h4>Deliveries</h4>
        </div>
        <div className="cardBody">
          {/* <Charts /> */}
          
        </div>
      </Card>
    </Container>
  )
}




const Container = styled.div`
  .card {
    padding: 30px;
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
  }
`
