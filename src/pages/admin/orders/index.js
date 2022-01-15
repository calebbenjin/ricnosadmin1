import React, { useState, useEffect } from 'react';
import { BsPlus } from 'react-icons/bs';
import { BiPrinter } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';
// import Button from '@/components/atoms/Button';
import ButtonGreen from '@/components/atoms/ButtonGreen';
import Container from '@/components/atoms/Container';
import Heading from '@/components/atoms/Heading';
import DataTable from '@/components/atoms/DataTable';
import Layout from '@/components/organisms/Layout';
import styled from 'styled-components';
import { parseCookies } from '@/helpers/index';
import { useRouter } from 'next/router';

export default function OrdersPage({ data }) {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState('all');
  const [orderData, setOrderData] = useState(data);

  const router = useRouter();

  useEffect(() => {
    if (filterBtn === 'all') {
      setOrderData(data);
    } else if (filterBtn === 'pending') {
      setOrderData(data.filter((order) => order.integer_status == '-1'));
    } else if (filterBtn === 'locked down') {
      setOrderData(data.filter((order) => order.integer_status === '2'));
    } else if (filterBtn === 'paid') {
      setOrderData(data.filter((order) => order.integer_status === '0'));
    } else if (filterBtn === 'accepted') {
      setOrderData(data.filter((order) => order.integer_status === '3'));
    } else if (filterBtn === 'dropped') {
      setOrderData(data.filter((order) => order.integer_status === '6'));
    } else if (filterBtn === 'for shipment') {
      setOrderData(data.filter((order) => order.integer_status === '4'));
    } else if (filterBtn === 'assigned for delivery') {
      setOrderData(data.filter((order) => order.integer_status === '5'));
    } else if (filterBtn === 'delivered') {
      setOrderData(data.filter((order) => order.integer_status === '7'));
    } else if (filterBtn === 'done') {
      setOrderData(data.filter((order) => order.integer_status === '1'));
    }
  }, [filterBtn]);

  return (
    <Layout>
      <Container>
        <Heading title="My Orders" icon={<FaListUl />}>
          <BtnContainer className="btnContainer">
            <Button
              mx="4"
              colorScheme="red"
              leftIcon={<BiPrinter className="iconSize" />}
            >
              Print
            </Button>
            <Button
              colorScheme="green"
              leftIcon={<BsPlus className="iconSize" />}
            >
              Create Order
            </Button>
          </BtnContainer>
        </Heading>

        <input
          style={{ background: '#fff !important', width: '50%;' }}
          type="text"
          placeholder="Search for Items"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </Container>
      <BtnContainer className="btnContainer">
        <Button
          colorScheme={filterBtn === 'all' ? 'red' : 'blackAlpha'}
          mt="4"
          ml="8"
          mr="4"
          size="sm"
          onClick={() => setFilterBtn('all')}
        >
          All
        </Button>
        <Button
          colorScheme={filterBtn === 'pending' ? 'red' : 'blackAlpha'}
          mt="4"
          size="sm"
          mr="4"
          onClick={() => setFilterBtn('pending')}
        >
          Pending
        </Button>
        <Button
          colorScheme={filterBtn === 'paid' ? 'red' : 'blackAlpha'}
          mt="4"
          size="sm"
          mr="4"
          onClick={() => setFilterBtn('paid')}
        >
          Paid
        </Button>
        <Button
          colorScheme={filterBtn === 'locked down' ? 'red' : 'blackAlpha'}
          mt="4"
          size="sm"
          mr="4"
          onClick={() => setFilterBtn('locked down')}
        >
          Locked down
        </Button>
        <Button
          colorScheme={filterBtn === 'accepted' ? 'red' : 'blackAlpha'}
          mt="4"
          size="sm"
          mr="4"
          onClick={() => setFilterBtn('accepted')}
        >
          Accepted
        </Button>
        <Button
          colorScheme={filterBtn === 'dropped' ? 'red' : 'blackAlpha'}
          mt="4"
          size="sm"
          mr="4"
          onClick={() => setFilterBtn('dropped')}
        >
          Dropped
        </Button>
        <Button
          colorScheme={filterBtn === 'for shipment' ? 'red' : 'blackAlpha'}
          mt="4"
          size="sm"
          mr="4"
          onClick={() => setFilterBtn('for shipment')}
        >
          For Shipment
        </Button>
        <Button
          colorScheme={
            filterBtn === 'assigned for delivery' ? 'red' : 'blackAlpha'
          }
          mt="4"
          size="sm"
          mr="4"
          onClick={() => setFilterBtn('assigned for delivery')}
        >
          Assigned for Delivery
        </Button>
        <Button
          colorScheme={filterBtn === 'delivered' ? 'red' : 'blackAlpha'}
          mt="4"
          size="sm"
          mr="4"
          onClick={() => setFilterBtn('delivered')}
        >
          Delivered
        </Button>
        <Button
          colorScheme={filterBtn === 'done' ? 'red' : 'blackAlpha'}
          mt="4"
          size="sm"
          mr="4"
          onClick={() => setFilterBtn('done')}
        >
          Done
        </Button>
      </BtnContainer>
      <DataTable data={orderData} />
    </Layout>
  );
}

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/order/orders',
    requestOptions
  );

  const result = await response.json();

  return {
    props: {
      data: result.data.orders,
    },
  };
}
