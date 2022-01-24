import React, { useState, useEffect } from 'react'
import { FaListUl } from 'react-icons/fa'
import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'
import FinanceTable from '@/components/atoms/FinanceTable'
import Layout from '@/components/organisms/Layout'
import { BiPrinter, BiSearchAlt } from 'react-icons/bi';
import { Flex, Stack, Button, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'

const data = [
  { id: 1, fullname: "Mark Golden", department: "Agent", requestAmount: 300, date: "May 2020", status: "active" },
  { id: 2, fullname: "Rose Jerry", department: "Rider", requestAmount: 300, date: "july 2020", status: "cancelled" },
  { id: 3, fullname: "Mark Welder", department: "Agent", requestAmount: 300, date: "May 2020", status: "pending" },
  { id: 4, fullname: "Kraken Loser", department: "Agent", requestAmount: 300, date: "May 2020", status: "paid" },
  { id: 5, fullname: "Mark Golden", department: "Agent", requestAmount: 300, date: "May 2020", status: "active" },
  { id: 6, fullname: "Kraken Loser", department: "Agent", requestAmount: 300, date: "May 2020", status: "paid" },
  { id: 7, fullname: "Mark Welder", department: "Agent", requestAmount: 300, date: "May 2020", status: "pending" },
  { id: 8, fullname: "Rose Jerry", department: "Rider", requestAmount: 300, date: "july 2020", status: "cancelled" },
];

export default function FinancePage() {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['all']);
  const [financeData, setFinanceData] = useState(data);

  useEffect(() => {
    if (filterBtn === 'all') {
      setFinanceData(data);
    } else if (filterBtn === 'pending') {
      setFinanceData(data.filter((order) => order.status === 'pending'));
    } else if (filterBtn === 'locked down') {
      setFinanceData(data.filter((order) => order.status === 'locked down'));
    } else if (filterBtn === 'Pending/Paid') {
      setFinanceData(data.filter((order) => order.status === 'Pending/Paid'));
    }
  }, [filterBtn]);

  return (
    <Layout>
      <Container>
        <Heading title="My Finance" icon={<FaListUl />} />
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
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('department')}>Department</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('date')}>
              Date
            </Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('status')}>
              Status
            </Button>
          </Stack>
        </Flex>
      </Container>
        <FinanceTable data={financeData} />
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
