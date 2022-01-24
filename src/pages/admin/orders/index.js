import React, { useState, useEffect } from 'react';
import { BsPlus } from 'react-icons/bs';
import { BiPrinter, BiSearchAlt } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';
import Container from '@/components/atoms/Container';
import Heading from '@/components/atoms/Heading';
import DataTable from '@/components/atoms/DataTable';
import Layout from '@/components/organisms/Layout';
import { Flex, Stack, Button, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import styled from 'styled-components';
import { parseCookies } from '@/helpers/index';
import { useRouter } from 'next/router';


const data = [
  { id: 1, tracking_id: "QH46", date: "july 2020", display_item: "Bags", pickup: "Lagos Leki", destination: "Port harcourt", status: "cancelled", amount: 2000 },
  { id: 2, tracking_id: "QH45", date: "march 2020", display_item: "Bags", pickup: "Lagos Leki", destination: "Port harcourt", status: "completed", amount: 2000 },
  { id: 3, tracking_id: "QH44", date: "july 2020", display_item: "Bags", pickup: "Lagos Leki", destination: "Port harcourt", status: "completed", amount: 2000 },
  { id: 4, tracking_id: "QH43", date: "july 2020", display_item: "Bags", pickup: "Lagos Leki", destination: "Port harcourt", status: "cancelled", amount: 2000 },
  { id: 5, tracking_id: "QH42", date: "july 2020", display_item: "Bags", pickup: "Warri", destination: "Lagos", status: "pending", amount: 2000 },
  { id: 6, tracking_id: "QH42", date: "july 2020", display_item: "Bags", pickup: "Warri", destination: "Lagos", status: "active", amount: 2000 },
  { id: 7, tracking_id: "QH42", date: "july 2020", display_item: "Bags", pickup: "Warri", destination: "Lagos", status: "pending", amount: 2000 },
  { id: 8, tracking_id: "QH42", date: "july 2020", display_item: "Bags", pickup: "Kanu", destination: "Calabar", status: "active", amount: 2000 },
  { id: 9, tracking_id: "QH42", date: "july 2020", display_item: "Bags", pickup: "Owerri", destination: "Lagos", status: "pending", amount: 2000 },
  { id: 10, tracking_id: "QH42", date: "july 2020", display_item: "Bags", pickup: "Jos", destination: "Kastina", status: "active", amount: 2000 },
];

export default function OrdersPage() {
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
          <Stack spacing={4} direction='row' align='center'>
            <Button type="submit" colorScheme="red" leftIcon={<BiPrinter />}>
              Print
            </Button>
            <Button type="submit" colorScheme="green" leftIcon={<BsPlus />}>
              Create Order
            </Button>
          </Stack>
        </Heading>

        <Flex>
          <InputGroup mr="4" bg="white">
            <InputLeftElement pointerEvents='none'>
            <BiSearchAlt style={{ fontSize: "1.2rem", color: "gray"}} />
            </InputLeftElement>
            <Input type='text' _focus={{paddingLeft: "2.2rem"}} value={q} onChange={(e) => setQ(e.target.value)} placeholder='Search' />
          </InputGroup>
          <Stack spacing={0} direction='row' align='center'>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('all')}>All</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('pending')}>Pending</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('locked down')}>Locked down</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('Pending/Paid')}>
              Pending Paid
            </Button>
          </Stack>
        </Flex>
      </Container>
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

// export async function getServerSideProps({ req }) {
//   const { token } = parseCookies(req);
//   if (!token) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   var myHeaders = new Headers();
//   myHeaders.append('Accept', 'application/json');
//   myHeaders.append('Authorization', `Bearer ${token}`);

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow',
//   };

//   const response = await fetch(
//     'https://alpha.ricnoslogistics.com/api/admin/order/orders',
//     requestOptions
//   );

//   const result = await response.json();

//   return {
//     props: {
//       data: result.data.orders,
//     },
//   };
// }
