import React, { useState, useEffect } from 'react';
import { FaListUl } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';
import Container from '@/components/atoms/Container';
import Heading from '@/components/atoms/Heading';
import FinanceTable from '@/components/atoms/FinanceTable';
import Layout from '@/components/organisms/Layout';
import { parseCookies } from '@/helpers/index';

export default function FinancePage({ data }) {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['all']);
  const [orderData, setOrderData] = useState(data);

  useEffect(() => {
    if (filterBtn === 'all') {
      setOrderData(data);
    } else if (filterBtn === 'pending') {
      setOrderData(data.filter((order) => order.status === 'pending'));
    } else if (filterBtn === 'paid') {
      setOrderData(data.filter((order) => order.status === 'paid'));
    } else if (filterBtn === 'declined') {
      setOrderData(data.filter((order) => order.status === 'declined'));
    }
  }, [filterBtn]);

  return (
    <Layout>
      <Container>
        <Heading title="My Finance" icon={<FaListUl />} />
        <input
          style={{ background: '#fff !important', width: '50%;' }}
          type="text"
          placeholder="Search for Items"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div>
          <Button
            onClick={() => setFilterBtn('all')}
            colorScheme="blue"
            mr="4"
            mt="4"
          >
            All
          </Button>
          <Button
            onClick={() => setFilterBtn('paid')}
            colorScheme="green"
            mr="4"
            mt="4"
          >
            Paid
          </Button>
          <Button
            onClick={() => setFilterBtn('pending')}
            colorScheme="yellow"
            mr="4"
            mt="4"
          >
            Pending
          </Button>
          <Button
            onClick={() => setFilterBtn('declined')}
            colorScheme="red"
            mt="4"
          >
            Declined
          </Button>
        </div>
      </Container>
      <FinanceTable data={orderData} />
    </Layout>
  );
}

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
    'https://alpha.ricnoslogistics.com/api/admin/withdrawal_requests',
    requestOptions
  );

  const result = await response.json();

  return {
    props: {
      data: result.data.withdrawal_requests,
    },
  };
}
