import React, { useState, useEffect } from 'react'
import { FaListUl } from 'react-icons/fa'
import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'
import QuoteTable from '@/components/atoms/QuoteTable'
import Layout from '@/components/organisms/Layout'
import { BiPrinter, BiSearchAlt } from 'react-icons/bi';
import { Flex, Stack, Button, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'


const data = [
  { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
];


export default function QuoteRequestPage() {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['all']);
  const [quoteData, setQuoteData] = useState(data);


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
    <Layout>
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
  )
}
