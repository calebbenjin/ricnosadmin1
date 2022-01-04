import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Card from './Card';
import ButtonLink from '@/components/atoms/ButtonLink';

export default function ShipmentCard({ data }) {
  return (
    <Box>
      <Card className="card">
        <Image
          src="/ricnoslogo.png"
          alt="productimage"
          width="60"
          height="40"
        />
        <div className="list">
          <div className="head">
            <h4>Item name</h4>
            <h4>Quantity</h4>
            <h4>Amount</h4>
            <h4>Pick up</h4>
          </div>
          <div className="body">
            <h4>{data.display_item}</h4>
            <h4>{data.quantity}</h4>
            <h4>NGN{data.amount}</h4>
            <h4>{data.destination}</h4>
          </div>
        </div>
        <ButtonLink href={`/dashboard/shipment/${data.id}`}>View</ButtonLink>
      </Card>
    </Box>
  );
}

const Box = styled.div`
  margin-top: 1.5rem;
  .card {
    padding: 20px;
    background: ${(props) => props.theme.colors.white};
    /* border: solid 1px ${(props) => props.theme.colors.grey}; */
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
      text-align: left;
      margin-bottom: 10px;
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
      text-align: left;
      /* color: ${(props) => props.theme.colors.secondary}; */
      h4 {
        width: 100%;
      }
    }
  }
`;
