import React, { useState, useEffect, useContext } from 'react';
import { BsPlus } from 'react-icons/bs';
import { BiPrinter, BiSearchAlt } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';
import {
  Button,
  Spinner,
  Flex,
  Stack,
  Input,
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react';
// import Button from '@/components/atoms/Button';
import ButtonGreen from '@/components/atoms/ButtonGreen';
import Container from '@/components/atoms/Container';
import Heading from '@/components/atoms/Heading';
import DataTable from '@/components/atoms/DataTable';
import Layout from '@/components/organisms/Layout';
import styled from 'styled-components';
import { parseCookies } from '@/helpers/index';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';
import { adminOrders, staffOrders } from '@/helpers/orders';

export default function OrdersPage({ token }) {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState('all');
  const [orderData, setOrderData] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    setLoading(true);
    if (user.role === '1') {
      adminOrders(token).then((data) => {
        setOrderData(data);
        setLoading(false);
      });
    } else if (user.role === '2') {
      staffOrders(token).then((data) => {
        setOrderData(data);
        setLoading(false);
      });
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (orderData) {
      if (filterBtn === 'all') {
        setFilteredData(orderData);
      } else if (filterBtn === 'pending') {
        setFilteredData(
          orderData.filter((order) => order.integer_status == '-1')
        );
      } else if (filterBtn === 'paid') {
        setFilteredData(
          orderData.filter((order) => order.integer_status === '0')
        );
      } else if (filterBtn === 'picked up') {
        setFilteredData(
          orderData.filter(
            (order) =>
              order.integer_status === '3' || order.integer_status === '5'
          )
        );
      } else if (filterBtn === 'in progress') {
        setFilteredData(
          orderData.filter(
            (order) =>
              order.integer_status === '6' || order.integer_status === '4'
          )
        );
      } else if (filterBtn === 'done') {
        setFilteredData(
          orderData.filter((order) => order.integer_status === '1')
        );
      }
    }
  }, [orderData, filterBtn]);

  useEffect(() => {
    if (q.length > 2) {
      setFilteredData(
        orderData.filter((order) => order.tracking_id.includes(q))
      );
    }
  }, [q]);

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

        <Flex>
          <InputGroup mr="4" bg="white">
            <InputLeftElement pointerEvents="none">
              <BiSearchAlt style={{ fontSize: '1.2rem', color: 'gray' }} />
            </InputLeftElement>
            <Input
              type="text"
              _focus={{ paddingLeft: '2.2rem' }}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
            />
          </InputGroup>
          <Stack spacing={0} direction="row" align="center">
            <Button
              borderRadius="0"
              variant="outline"
              bg="white"
              leftIcon={<BiPrinter />}
              onClick={() => setFilterBtn('all')}
            >
              All
            </Button>
            <Button
              borderRadius="0"
              variant="outline"
              bg="white"
              leftIcon={<BiPrinter />}
              onClick={() => setFilterBtn('pending')}
            >
              Pending
            </Button>
            <Button
              borderRadius="0"
              variant="outline"
              bg="white"
              leftIcon={<BiPrinter />}
              onClick={() => setFilterBtn('paid')}
            >
              Paid
            </Button>
            <Button
              borderRadius="0"
              variant="outline"
              bg="white"
              leftIcon={<BiPrinter />}
              onClick={() => setFilterBtn('picked up')}
            >
              Picked Up
            </Button>
            <Button
              borderRadius="0"
              variant="outline"
              bg="white"
              leftIcon={<BiPrinter />}
              onClick={() => setFilterBtn('in progress')}
            >
              In progress
            </Button>
            <Button
              borderRadius="0"
              variant="outline"
              bg="white"
              leftIcon={<BiPrinter />}
              onClick={() => setFilterBtn('done')}
            >
              Done
            </Button>
          </Stack>
        </Flex>
      </Container>
      {/* <BtnContainer className="btnContainer">
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
      </BtnContainer> */}
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
        <>{filteredData && <DataTable data={filteredData} />}</>
      )}
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

  return {
    props: {
      token,
    },
  };
}
