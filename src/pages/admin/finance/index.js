import React, { useState, useEffect } from 'react';
import { API_URL } from '@/lib/index';
import { FaListUl } from 'react-icons/fa';
import { BiPrinter, BiSearchAlt } from 'react-icons/bi';
import Container from '@/components/atoms/Container';
import Heading from '@/components/atoms/Heading';
import FinanceTable from '@/components/atoms/FinanceTable';
import Layout from '@/components/organisms/Layout';
import { parseCookies } from '@/helpers/index';
import { Flex, Stack, Button, Input, InputLeftElement, InputGroup } from "@chakra-ui/react"

export default function FinancePage({ data, user }) {
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
    <Layout data={user}>
      <Container>
      <Heading title="My Finance" icon={<FaListUl />} />
        <Flex>
          <InputGroup mr="4" bg="white">
            <InputLeftElement pointerEvents='none'>
            <BiSearchAlt style={{ fontSize: "1.2rem", color: "gray"}} />
            </InputLeftElement>
            <Input type='text' _focus={{paddingLeft: "2.2rem"}} value={filterBtn} onChange={(e) => setFilterBtn(e.target.value)} placeholder='Search' />
          </InputGroup>
          <Stack spacing={0} direction='row' align='center'>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('all')}>All</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('paid')}>Paid</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('pending')}>Pending</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('declined')}>
              Declined
            </Button>
          </Stack>
        </Flex>
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

  const res = await fetch(`${API_URL}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  const userData = await res.json()

  return {
    props: {
      data: result.data.withdrawal_requests,
      user: userData.data.user
    },
  };
}
