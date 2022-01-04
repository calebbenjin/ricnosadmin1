import React, { useState, useEffect } from 'react';
import { BsPlus } from 'react-icons/bs';
import { BiPrinter } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';
import Button from '@/components/atoms/Button';
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
  const [filterBtn, setFilterBtn] = useState(['all']);
  const [orderData, setOrderData] = useState(data);

  const router = useRouter();

  useEffect(() => {
    if (filterBtn === 'all') {
      setOrderData(data);
    } else if (filterBtn === 'pending') {
      setOrderData(data.filter((order) => order.status === 'pending'));
    } else if (filterBtn === 'locked down') {
      setOrderData(data.filter((order) => order.status === 'locked down'));
    } else if (filterBtn === 'Pending/Paid') {
      setOrderData(data.filter((order) => order.status === 'Pending/Paid'));
    }
  }, [filterBtn]);

  return (
    <Layout>
      <Container>
        <Heading title="My Orders" icon={<FaListUl />}>
          <BtnContainer className="btnContainer">
            <Button type="submit" icon={<BiPrinter className="iconSize" />}>
              Print
            </Button>
            <ButtonGreen type="submit" icon={<BsPlus className="iconSize" />}>
              Create Order
            </ButtonGreen>
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
        <Button onClick={() => setFilterBtn('all')}>All</Button>
        <Button onClick={() => setFilterBtn('pending')}>Pending</Button>
        <Button onClick={() => setFilterBtn('locked down')}>Locked down</Button>
        <Button onClick={() => setFilterBtn('Pending/Paid')}>
          Pending Paid
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
