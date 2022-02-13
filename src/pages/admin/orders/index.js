import React, { useState, useEffect, useContext } from 'react';
import { API_URL } from '@/lib/index';
import { BsPlus } from 'react-icons/bs';
import { BiPrinter, BiSearchAlt } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';
import Container from '@/components/atoms/Container';
import Heading from '@/components/atoms/Heading';
import DataTable from '@/components/atoms/DataTable';
import Layout from '@/components/organisms/Layout';
import { Flex, Stack, Button, Input, InputLeftElement, InputGroup, Spinner } from '@chakra-ui/react'
import Link from "next/link"
import { parseCookies } from '@/helpers/index';
import { adminOrders, staffOrders } from '@/helpers/orders';

export default function OrdersPage({ token, user }) {
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const [filterBtn, setFilterBtn] = useState('all');
  
  useEffect(() => {
    setLoading(true);
    if (user.role === '1') {
      adminOrders(token).then((data) => {
        if (filterBtn === 'all') {
          setOrderData(data);
        } else if (filterBtn === 'pending') {
          setOrderData(data.filter((order) => order.status === 'pending'));
        } else if (filterBtn === 'locked down') {
          setOrderData(data.filter((order) => order.status === 'locked down'));
        } else if (filterBtn === 'Pending/Paid') {
          (data.filter((order) => order.status === 'Pending/Paid'));
        }
        setLoading(false);
      });
    } else if (user.role === '2') {
      staffOrders(token).then((data) => {
        setOrderData(data);
        setLoading(false);
      });
    }
  }, []);

  const [orderData, setOrderData] = useState();
  

  console.log(orderData)

  // useEffect(() => {
  //   if (filterBtn === 'all') {
  //     setOrderData(data);
  //   } else if (filterBtn === 'pending') {
  //     setOrderData(data.filter((order) => order.status === 'pending'));
  //   } else if (filterBtn === 'locked down') {
  //     setOrderData(data.filter((order) => order.status === 'locked down'));
  //   } else if (filterBtn === 'Pending/Paid') {
  //     (data.filter((order) => order.status === 'Pending/Paid'));
  //   }
  // }, [filterBtn]);

  return (
    <Layout data={user}>
      <Container>
        <Heading title="My Orders" icon={<FaListUl />}>
          <Stack spacing={4} direction='row' align='center'>
            <Link href="/admin/offline/">
              <Button type="submit" colorScheme="green" leftIcon={<BsPlus />}>
                Create Order
              </Button>
            </Link>
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
      {loading ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            padding: '20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spinner size="xl" color="red.500" />
        </div>
      ) : (
        <>{orderData && <DataTable data={orderData} />}</>
      )}
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


  const res = await fetch(`${API_URL}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  const data = await res.json()

  return {
    props: {
      user: data.data.user, 
      token
    },
  };
}
