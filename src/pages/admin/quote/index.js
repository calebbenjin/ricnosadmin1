import React, { useState, useEffect } from 'react'
import { FaListUl } from 'react-icons/fa'
import { API_URL } from '@/lib/index';
import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'
import QuoteTable from '@/components/atoms/QuoteTable'
import Layout from '@/components/organisms/Layout'
import { BiPrinter, BiSearchAlt } from 'react-icons/bi';
import { Flex, Stack, Button, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { parseCookies } from '@/helpers/index';


export default function QuoteRequestPage({ data, user }) {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['all']);
  const [quoteData, setQuoteData] = useState(data);

  console.log(data)

  useEffect(() => {
    if (filterBtn === 'all') {
      setQuoteData(data);
    } else if (filterBtn === 'pending') {
      setQuoteData(data.filter((order) => order.status === 'pending'));
    } else if (filterBtn === 'locked down') {
      setQuoteData(data.filter((order) => order.status === 'locked down'));
    } else if (filterBtn === 'Pending/Paid') {
      (data.filter((order) => order.status === 'Pending/Paid'));
    }
  }, [filterBtn]);

  return (
    <Layout data={user}>
      <Container>
        <Heading title="Quote Requests" icon={<FaListUl />} />
        <Flex>
          <InputGroup mr="4" bg="white">
            <InputLeftElement pointerEvents='none'>
            <BiSearchAlt style={{ fontSize: "1.2rem", color: "gray"}} />
            </InputLeftElement>
            <Input type='text' _focus={{paddingLeft: "2.2rem"}} value={q} onChange={(e) => setQ(e.target.value)} placeholder='Search' />
          </InputGroup>
          <Stack spacing={0} direction='row' align='center'>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('all')}>All</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('fullname')}>Name</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('phone')}>Phone</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('date')}>
              Date
            </Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('email')}>
              Email
            </Button>
          </Stack>
        </Flex>
      </Container>
        
        <QuoteTable data={quoteData} />
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
    'https://alpha.ricnoslogistics.com/api/admin/quote_requests',
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
      data: result.data.quotes,
      user: userData.data.user
    },
  };
}
