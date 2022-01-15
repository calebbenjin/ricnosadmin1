import Container from '@/components/atoms/Container';
import Layout from '@/components/organisms/Layout';
import styled from 'styled-components';
import Card from '@/components/atoms/Card';
import {
  Button,
  Flex,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import Link from 'next/link';
import Logo from '@/components/atoms/Logo';
import logo from '@/assets/logo1.svg';
import Image from 'next/image';
import { parseCookies } from '@/helpers/index';

export default function SingleQuotePage({ data }) {
  const handleClick = () => {
    alert('Hello Coder');
  };

  return (
    <Layout>
      <Container>
        <Header>
          <h2 className="orderId">#{data.id}</h2>
        </Header>
        <SectionLayout>
          <Flex>
            <Box width="70%" pr="4">
              <Card>
                <Heading size="md">Sender Details</Heading>
                <Flex alignItems="center" justifyContent="space-between" mt="4">
                  <Box width="33%">
                    <Heading size="sm" color="red">
                      Name
                    </Heading>
                    <Text>{data.name}</Text>
                  </Box>
                  <Box width="33%">
                    <Heading size="sm" color="red">
                      Email
                    </Heading>
                    <Text>{data.email}</Text>
                  </Box>
                  <Box>
                    <Heading size="sm" color="red">
                      Phone Number
                    </Heading>
                    <Text>{data.phone}</Text>
                  </Box>
                </Flex>
              </Card>
              <Box my="8">
                <Card>
                  <Heading size="md">Shipment Data</Heading>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mt="4"
                  >
                    <Box>
                      <Heading size="sm" color="red">
                        Weight
                      </Heading>
                      <Text>{data.weight}</Text>
                    </Box>
                    <Box>
                      <Heading size="sm" color="red">
                        Value
                      </Heading>
                      <Text>{data.value}</Text>
                    </Box>
                    <Box>
                      <Heading size="sm" color="red">
                        Vehicle
                      </Heading>
                      <Text>{data.vehicle}</Text>
                    </Box>
                    <Box width="33%">
                      <Heading size="sm" color="red">
                        Destination
                      </Heading>
                      <Text>{data.destination}</Text>
                    </Box>
                  </Flex>

                  {/* <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mt="4"
                  >
                    <Box width="33%">
                      <Heading size="sm" color="red">
                        Destination
                      </Heading>
                      <Text>{data.destination}</Text>
                    </Box>
                  </Flex> */}

                  {/* <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mt="4"
                  >
                    <Box>
                      <Heading size="sm" color="red">
                        Quote
                      </Heading>
                      <Text>NGN {data.quote}</Text>
                    </Box>
                  </Flex> */}
                </Card>
              </Box>
              <Box my="8">
                <Card>
                  <Heading size="md">Auto Generated Quote</Heading>
                  {/* <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    my="6"
                  >
                    <Text fontWeight="500">
                      Subtotal<sup>(all items)</sup>
                    </Text>
                    <Text>NGN 30000</Text>
                  </Flex>
                  <hr />
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    my="4"
                  >
                    <Text fontWeight="500">
                      Tax<sup>PDV20%(included)</sup>
                    </Text>
                    <Text>NGN 300.00</Text>
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    my="6"
                  >
                    <Text fontWeight="500">Shipping Discount</Text>
                    <Text>NGN 00.00</Text>
                  </Flex> */}
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    my="8"
                  >
                    <Heading size="sm">Total</Heading>
                    <Heading size="sm">NGN {data.quote}</Heading>
                  </Flex>
                </Card>
                <Button colorScheme="red" mt="10">
                  Send Quote
                </Button>
              </Box>
            </Box>
            <Box width="30%" pl="4">
              <Card>
                <Heading size="md">Generate Recipt</Heading>

                <form>
                  <FormControl mt="4">
                    <FormLabel htmlFor="subtotal" color="black">
                      Subtotal<sup>(all items)</sup>
                    </FormLabel>
                    <Input id="subtotal" type="text" />
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel htmlFor="shipping" color="black">
                      Shipping
                    </FormLabel>
                    <Input id="shipping" type="text" />
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel htmlFor="Tax" color="black">
                      Tax
                    </FormLabel>
                    <Input id="tax" type="text" />
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel htmlFor="shippingDiscount" color="black">
                      Shipping Discount
                    </FormLabel>
                    <Input id="shippingDiscount" type="text" />
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel htmlFor="total" color="black">
                      Total
                    </FormLabel>
                    <Input id="total" type="text" />
                  </FormControl>

                  <Button colorScheme="red" mt="8">
                    Send Quote
                  </Button>
                </form>
              </Card>
            </Box>
          </Flex>
        </SectionLayout>
      </Container>
    </Layout>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  .orderId {
    font-weight: 800;
    font-size: 2rem !important;
  }
  .date {
    font-size: 1.2rem !important;
    color: #333333;
  }
`;

const SectionLayout = styled.div`
  margin: 3rem 0;
  .card-title {
    font-weight: 700;
    font-size: 2rem;
  }
`;
const OrderStatus = styled.div`
  box-shadow: ${(props) => props.theme.shadows.shadow2};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radius};
  padding: 30px;
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #cccc;
    padding-bottom: 20px;

    .status {
      display: flex;
      align-items: center;

      h2 {
        font-size: 1.5rem !important;
        margin-right: 5px;
      }

      p {
        padding: 2px 8px;
        border-radius: 55px;
        background: #ffa928;
        margin-right: 20px;
      }
    }
  }

  .pickupContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    width: 90%;
    margin: 1rem auto;

    .box {
      width: 85%;
    }

    .card {
      margin-top: 1rem;
      p {
        margin: 0.5rem 0;
        color: #424242;
      }
    }
    .card-title {
      font-weight: 700;
    }
    .edit {
      color: #2068d5;
      font-weight: 600;
    }
  }
`;

export async function getServerSideProps({ req, query }) {
  const { token } = parseCookies(req);
  const { id } = query;

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
    `https://alpha.ricnoslogistics.com/api/admin/quote_request/${id}`,
    requestOptions
  );

  const result = await response.json();

  return {
    props: {
      data: result.data.quote,
      token,
    },
  };
}
