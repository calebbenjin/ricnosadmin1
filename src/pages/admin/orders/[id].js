import React, { useEffect, useState } from 'react'
import Container from '@/components/atoms/Container'
import Layout from '@/components/organisms/Layout'
import styled from 'styled-components'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import ButtonGreen from '@/components/atoms/ButtonGreen'
import Link from 'next/link'

export default function OrdersPage() {
  return (
    <Layout>
      <Container>
        <Heading>
          <h2 className='orderId'>Orders #00074</h2>
          <h5 className='date'>06.12.2021 at 10:14am</h5>
        </Heading>

        <OrderStatus>
          <div className='header'>
            <div className='status'>
              <h2>Status</h2>
              <p>Pending</p>
            </div>
            <Button>Print Invoice</Button>
          </div>
          <div className='pickupContainer'>
            <div className='box'>
              <div className='card'>
                <h6 className='card-title'>
                  Planned Pickup
                  <Link href='/'>
                    <a className='edit'> Edit</a>
                  </Link>
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae, aperiam?
                </p>
              </div>
              <div className='card'>
                <h6 className='card-title'>
                  Office Pickup
                  <Link href='/'>
                    <a className='edit'> Edit</a>
                  </Link>
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae, aperiam?
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='card'>
                <h6 className='card-title'>
                  Airport Delivery
                  <Link href='/'>
                    <a className='edit'> Edit</a>
                  </Link>
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae, aperiam?
                </p>
              </div>
              <div className='card'>
                <h6 className='card-title'>
                  Airport Up
                  <Link href='/'>
                    <a className='edit'> Edit</a>
                  </Link>
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae, aperiam?
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='card'>
                <h6 className='card-title'>
                  Planned Delivery
                  <Link href='/'>
                    <a className='edit'> Edit</a>
                  </Link>
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae, aperiam?
                </p>
                <ButtonGreen>Deliver</ButtonGreen>
              </div>
            </div>
          </div>
        </OrderStatus>
          <SectionLayout>
            <main>
              <Card>
                <h4 className="card-title">Sender Details</h4>
              </Card>
            </main>
            <aside></aside>
          </SectionLayout>
      </Container>
    </Layout>
  )
}

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  .orderId {
    font-weight: 800;
    font-size: 2rem !important;
  }
  .date {
    font-size: 1.2rem !important;
    color: #333333;
  }
`;

const SectionLayout = styled.div`
  margin: 3rem 0;
  .card-title {
    font-weight: 700;
    font-size: 2rem;
  }
`;
const OrderStatus = styled.div`
  box-shadow: ${(props) => props.theme.shadows.shadow2};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radius};
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
        font-size: 1.5rem !important;
        margin-right: 5px;
      }

      p {
        padding: 2px 8px;
        border-radius: 55px;
        background: #ffa928;
        margin-right: 20px;
      }
    }
  }

  .pickupContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    width: 90%;
    margin: 1rem auto;

    .box {
      width: 85%;
    }

    .card {
      margin-top: 1rem;
      p {
        margin: 0.5rem 0;
        color: #424242;
      }
    }
    .card-title {
      font-weight: 700;
    }
    .edit {
      color: #2068D5;
      font-weight: 600;
    }
  }
`
