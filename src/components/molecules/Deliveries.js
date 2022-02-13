import Card from "../atoms/Card";
import styled from 'styled-components'
import Charts from "./Charts";
import { ResponsivePie } from '@nivo/pie'

const pieData = [
  {
    id: "Completed",
    label: "Completed",
    value: 60,
    color: "grey"
  },
  {
    id: "Active",
    label: "Active",
    value: 20,
    color: "#000"
  },
  {
    id: "Pending",
    label: "Pending",
    value: 10,
    color: "gray"
  },
  {
    id: "Cancelled",
    label: "Cancelled",
    value: 10,
    color: "red"
  }
];


export default function Deliveries() {
  return (
    <Container>
      <Card className='card'>
        <div className='header'>
          <h4>Deliveries</h4>
        </div>
        <div className="cardBody">
        <ResponsivePie
          data={pieData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={2}
          activeOuterRadiusOffset={12}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={1}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        />
        </div>
      </Card>
    </Container>
  )
}




const Container = styled.div`
  .card {
    padding: 30px;
    /* width: 50%; */
    .cardBody {
      height: 300px!important;
    }
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
