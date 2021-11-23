import React, {useEffect, useState} from 'react'
import Container from "@/components/atoms/Container";
import Heading from "@/components/atoms/Heading";
import Layout from "@/components/organisms/Layout";
import styled from 'styled-components'
import Button from '@/components/atoms/Button';


export default function OrdersPage() {
  return (
    <Layout>
      <Container>
        <Heading>
          <h2>Orders #00074</h2>
          <p>06.12.2021 at 10:14am</p>
        </Heading>

        <OrderStatus>
          <div className="header">
            <div className="status">
              <h2>Status</h2>
              <p>Pending</p>
            </div>
            <Button>Print Invoice</Button>
          </div>
        </OrderStatus>
      </Container>
    </Layout>
  )
}


const OrderStatus = styled.div`
  box-shadow: ${props => props.theme.shadows.shadow};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius};
  padding: 30px;
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #cccc;
    padding-bottom: 20px;

    .status {
      display: flex;
      align-items: center;

      h2 {
        font-size: ${(props) => props.theme.fontSize.medium};
        margin-right: 5px;
      }
      
      p {
        padding: 2px 8px;
        border-radius: 55px;
        background: #FFA928;
        margin-right: 20px;
      }
    }
  }
`;


